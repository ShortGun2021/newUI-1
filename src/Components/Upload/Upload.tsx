import React, { useState } from 'react'
import ImageUploading, { ImageListType } from 'react-images-uploading'
import Arweave from 'arweave'
import { Buffer } from 'buffer'
import '../Styles/UploadPageStyles/Upload.css'
import IconButton from '@mui/material/IconButton'
import { MdAddPhotoAlternate, MdDeleteForever } from 'react-icons/md'
import { GrAdd } from 'react-icons/gr'
import { IoIosRemove } from 'react-icons/io'
import {
  TextField,
  Box,
  Typography,
  Container,
  Button,
  Stack,
} from '@mui/material'

const Upload = () => {
  let temp = true
  // --------------Images ----------------------
  const [images, setImages] = React.useState([])
  const [data, setData] = React.useState('')
  const maxNumber = 1

  // ----------------------------Metadata-----------
  const [meta, setmeta] = React.useState({
    name: '',
    symbol: '',
    description: '',
    seller_fee_basis_points: '',
    image: '',
    attributes: [
      {
        trait_type: '',
        value: '',
      },
    ],

    properties: {
      files: [
        {
          uri: '',
          type: '', //check it for different types such as video, gif, also list form
        },
      ],

      category: '', //current setting as image

      //what if creators need to add like trait type, list form
      creators: [
        {
          address: '',
          verified: true,
          share: '', // int
        },
      ],
    },
  })

  // ---------------------metadata ---------------

  const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setmeta({
      ...meta,
      [e.target.name]: e.target.value,
    })
  }

  const onChangeSeller = (e: React.ChangeEvent<HTMLInputElement>) => {
    setmeta({
      ...meta,
      [e.target.name]: e.target.value,
    })
  }
  const onChangeAttr = (e, index) => {
    console.log(index, e.target.name)
    const val = [...meta.attributes]
    val[index][e.target.name] = e.target.value
    setmeta({
      ...meta,
      attributes: val,
    })
  }

  const onChangePropType = (e: React.ChangeEvent<HTMLInputElement>) => {
    setmeta({
      ...meta,
      properties: {
        ...meta.properties,
        files: [
          {
            ...meta.properties.files[0],
            [e.target.name]: e.target.value,
          },
        ],
      },
    })
  }

  const onchangeCategory = (e: React.ChangeEvent<HTMLInputElement>) => {
    setmeta({
      ...meta,
      properties: {
        ...meta.properties,
        [e.target.name]: e.target.value,
      },
    })
  }

  const onchangeAddress = (e, index) => {
    console.log(index, e.target.name)
    const val = [...meta.properties.creators]
    val[index][e.target.name] = e.target.value

    setmeta({
      ...meta,
      properties: {
        ...meta.properties,
        creators: val,
      },
    })
  }

  const onclickadd = () => {
    setmeta({
      ...meta,
      properties: {
        ...meta.properties,
        creators: [
          ...meta.properties.creators,
          { address: '', verified: true, share: '' },
        ],
      },
    })
  }

  const onclick = () => {
    setmeta({
      ...meta,
      attributes: [...meta.attributes, { trait_type: '', value: '' }],
    })
  }

  const onremoveAttr = (index) => {
    const val = [...meta.attributes]
    val.splice(index, 1)
    setmeta({
      ...meta,
      attributes: val,
    })
  }

  const removeadd = (index) => {
    const val = [...meta.properties.creators]
    val.splice(index, 1)
    setmeta({
      ...meta,
      properties: {
        ...meta.properties,
        creators: val,
      },
    })
  }

  const ImageComponent = ({ index, image, onImageRemove }) => {
    const [hover, sethover] = useState(false)
    return (
      <div
        onMouseEnter={() => sethover(true)}
        onMouseLeave={() => sethover(false)}
        style={
          hover
            ? {
                filter: 'brightness(60%)',
                transition: ' ease',
                position: 'absolute',
                top: 0,
                borderRadius: '4px',
              }
            : { position: 'absolute', top: 0, borderRadius: '4px' }
        }
        key={index}
        className="image-item"
      >
        <img
          style={{
            position: 'absolute',
            borderRadius: '6px',
            width: 200,
            height: 200,
          }}
          src={image.dataURL}
          alt=""
        />
        {hover ? (
          <>
            <div
              onMouseEnter={() => sethover(true)}
              onMouseLeave={() => sethover(false)}
              style={{
                position: 'absolute',
                top: 0,
                width: 200,
                height: 200,
              }}
            >
              <Button
                style={{
                  position: 'absolute',
                  left: '50%',
                  top: '50%',
                  transform: 'translate(-50%, -50%)',
                }}
                onClick={() => onImageRemove(index)}
                onMouseEnter={() => sethover(true)}
              >
                <div style={{}}>
                  <MdDeleteForever style={{ color: '#ffffff', fontSize: 40 }} />
                </div>
              </Button>
            </div>
          </>
        ) : (
          ''
        )}
        {/* <Stack direction = "row" spacing={1}> */}

        {/* <div className="image-item__btn-wrapper">
      <Stack
        direction="row"
        spacing={1}
        justifyContent="center"
      >
        <Button
          variant="contained"
          onClick={() => onImageUpdate(index)}
        >
          Update
        </Button>
  
        <Button
          variant="contained"
          onClick={() => onImageRemove(index)}
        >
          Remove
        </Button>
      </Stack>
    </div> */}
      </div>
    )
  }

  // ----------------------------Images variables - -----
  const onChange = (
    imageList: ImageListType,
    addUpdateIndex: number[] | undefined
  ) => {
    // data for submit

    console.log(imageList)
    console.log(addUpdateIndex)
    setImages(imageList as never[])

    const im = imageList[0]
    let d = im[Object.keys(im)[0]]
    console.log(d)
    setData(d)
  }
  // ----------------------------------------------------------------------------------
  // rwearve
  const Ar = async () => {
    //optionally check if fields are empty
    console.log(meta)
    console.log(meta.symbol)
    console.log(meta.description)
    console.log(meta.seller_fee_basis_points)
    console.log(meta.image)
    // console.log(meta.attributes[0].trait_type);
    console.log(meta.attributes.length)
    for (let i = 0; i < meta.attributes.length; i++) {
      if (
        !meta.attributes[i].trait_type ||
        !meta.attributes[i].value ||
        !meta.properties.files[i].type ||
        !meta.properties.category ||
        !meta.properties.creators[i].address ||
        !meta.properties.creators[i].share
      ) {
        temp = false
      }
    }
    if (
      !meta.name ||
      !meta.symbol ||
      !meta.description ||
      !meta.seller_fee_basis_points ||
      temp === false
    ) {
      alert('Please fillup the required fields')
    } else {
      const arweave = Arweave.init({
        host: 'arweave.net',
        port: 443,
        protocol: 'https',
        timeout: 20000,
        logging: false,
      })
      const image1 = Buffer.from(data.split(',')[1], 'base64')
      console.log('done')
      console.log('connected')
      const transaction = await arweave.createTransaction({
        data: image1,
      })
      console.log(transaction)
      transaction.addTag('Content-Type', 'image/png')

      console.log('wallet done')

      await arweave.transactions.sign(transaction, {
        kty: 'RSA',
        n: '3LoeAKTIJpq2hnpQ8wIK-TUcRwBElkt8TCztASJq7_I9ZMdVXHpD5-RQqY1kVZiSimEb2zulTNLuKMGb530zJ1JsMu57aJBEW0T8pjzpcEcWAJ_s7J9hWKNB-Bow9GblFVu19CUZFOkqyEgFWtoqQd2q6jS-nVkZhzr_rT8vwQs4eluTS3gUcch97ZDY7Y03AlvJ2FnaQrrkEI1bCKmqpbe0ghT3gyn5A3CeoyvV8X4EzU2JRTlnrVHipPt1F1KsUasqQfg_6HKSBu4ygTn9s5Fk1QGnweIF0RH9wBehrVw3ZAjJWugvl8DJaebOPYnd5d4Pe8ajCtuv3SvuyOmPhLWGl7aNFVWvXoYXrmuvbkmTQoebnLPvkHMtswZCZAfUrCmQQS2wBZ0027BFeA3Isbyf1yBF7Pldi1tp_fVc_-qtSaAYZm0hc7SYyu9wYwBwj7b5dlucrUDiAvSgM-rYF-1aEPpMSjIF6MRMU4YdQkyZj40594V7v7I8HVLmZc-r6XM1KT7mYdQJUAzjbg_mG6xhlyuMQ2Zx-b7kvy9JLvRp6cjBZ1tXgyNWd5rXy1aXssnyF8aGQ4GRaOk0wtcSRqN98vrzE9xqLS3OHLZdEYVKW7ign_7S7j1kC8C4xPR0B2Dz-hdAD-RmnBOf_mMeOjZr0teU_AGMAMUW37ArPT0',
        e: 'AQAB',
        d: 'McrKedqyTAMaqbtuB2OulgklF983ma_tmkGINXlOJlK_BrzwxKvQJb-bcqQyvhxs8kp1vj72Sx5KG2eRg-b6YyR0xAiITk49HVmypM2Y23stu3ZYPAi4LQanGxDNelS72NWXdjvoLI9s10Fn89bDMZiPtcWwOk6fM6Jbivl2DFY7p16BG8U613Ai-DR0uyHgBugt4GBknCkMya8ZmhqsJDYMwkt4il4tjlkZcDWzTYbgDnAvRy5r9O1D83PGNjywIrw6DCe0QvuVdXrGaeBrGtbxqBt3fIVASqmEVJEAJ9tlo2tYAOnf0pvq07j9TWSMag5t774fiZOFWJ9QfoIxnZMDcNdXtjWtMdDmuDOHX0R2Vz1eqa9blCjeRTHaRJVSwsUoyAbR-PwobTTsYJG6sLSz4Sd8Gyn2UuoX1SnNv4Y6-mGpM8oIfkZmngVWq0kPspRGFjpu_iR4WxcYxW4AHGItiz7YynUoZ8AIeIILPf4HzCceAnVhADdLdsCvTHW0w6GnKDLEUFeqZtvMYtNH5Wr5ggLUHpLxg1WjTWtGK2FqpxAU3jq08ABZZCRxLLPSy5AA1qUFkCHYV4mI61uRMPpd7nd1w6hy-J_EW3W-1S27HraXacV2SGEzav9osqm9L-0Rl68_TFWkQGy6JOdcpadmBnDPL37-Bd_5fsLgYAE',
        p: '9p3JCa964jJ7XiiAWkYuCF1E1AjAvUUwOAEymGMeohAJvD_Q-pgIL1urilvdeOwyZDgUQ-dXnkXJev09H-CDGQeonTWyLl6qT36aB7Kuk9qzkpW9Niz018K_UNx5abX4sQrs_H5M_PC4uxt-8vZLJCOMp2WCclWqKVLGeqmJCCSwQaI9swJRd5Bxq3XYqt00AcNTosQPFPwpwj32eZGbOTgFpZq1NPwIf5iASumiZSMotQVdREjLdeOGw2R6OveJUpedyxrIBTKOlhcduYreNz8VKPEKQELLOHVK7oTyjOGJ5peWdmhO0XzGvlSZFzuiJARDTchMgWrfCCN17v4RYQ',
        q: '5SAm3pZxNwfW_50DgD20addP7ESbcZZd8AyseqBEks0VRKn550jBVxr3HtH1fR3XLsR5Pn6tE90TUvClGZd6QaxEiF1Ye8cTY1ryFV_Fmze8fSyvKcdmEKDvJaMYlhf32p0Ju8ucjNwq5xvnO4mYzGDHWXalgD_A45VszH8g2T0Wc1OUp-8XomGfGrj3enWjLxHZNUguGcU4CUf6U9ql4rWfhL7UPDCggTl0lEVpsBQiagsW8a6yGWKjgCBEpz8X_YZRfebJp7nRPxvtW6xU419JBm_bEARCwEuiBNb434pJxJXvQAd8AFcqX1zSbjaYAHh_oLKjEITJqzrqXx0NXQ',
        dp: 'lo_QK_yZTj25ucuKSRLtiae_nJ_XY_Y4sQhyJjzld9XIy8g-Qq_M13Tk7qyVMv0o6qyeGrLDeFps3ox649pCz2YwmAIvTUX4Pl4xlZ-OG7B6z3RhtxCNTqiT-r8P1O0G7reX5bMKN6aTcZAg2h5p059sgMplcH5CS8ZAbKTSh0k23ms5te8lY5SpASAKbo5r8OOaTRXbi1lD-VWxA5lUpgNA11Dzbmysl5G4SYQH5C0p7hJfVZAHv2pwXRwbz6JOkUEFUfmAwkOSb6mfOSbB8gKuXXeDZaYhwc9CNwqttjr_4OsNLi8SZ60A_TRS3q9GlyyPFo7BvoVLswFLP-SXIQ',
        dq: 'BYNtjAOgu8tDgCkeEXLqqXVV5gCMoQIWRpV3fQfoPoQS0_EnI0qb5GWwtpwkxRr3t5dgt4FC1uyF74P85Q3BEl171LAyVeAndkeU9bC1R5PixDxUBrRWn2XP-17eU5ZGD4uh1VQD81vE6ITCXqtj8t8NTPjO6LQgBxnsYUtZ1gBjTuke9Z-KOQ0SUAlNYzP7dkF-sYqIGXSmcYq62lOzlC38pawV3VDqO9HPHVZCQctqPJUBu1UR0gyOlKGyJTgecqpNwbLQ_Wk6QMOCRady73m2fyIn6k2_8XKgdm9Z0783ITTeafMEJ9nxGhRYt_A2XiSIJazGwboARE-JnjpLvQ',
        qi: 'y30NbB_LGbTwPKZ0qVZbazZh_SnnBMagTSfmssqelrUsiEstSKGsZVk1GyhAHzpoXasDGue81xlsHYp0qGzdSwsJOSFG6Qidi4MeDsTRWU62Bp8KOhah1nqvwVj9VwJwrtkf8N-crjbyzTgnJ5B2gX_NAZg0NFvoZ4lsPh7fDEQcB2P2Zu01Vwt-Zs_1qlMc4aDqVyN-TShgkSoNaH6PLwysI51BPh0Uc0XerjNwRZYPP2FdtSEVJO80apHwuOP0og6z8dBC2hTzKl6NOvbQ0Ft1cFA7-giYtFJ1aDc5oO4wpA2eTpo62Mvm6KPMWNmKdDJw8t9e3Bb0Md8fR5titQ',
      })

      // console.log('succesfull')

      const response = await arweave.transactions.post(transaction)
      console.log(response)

      const id = transaction.id
      const imageUrl = id ? `https://arweave.net/${id}` : undefined
      console.log('imageUrl', imageUrl)
      console.log('Image Sucessfully Uploaded')

      // ------------------ metadata function------
      console.log('Uploading metadata')

      console.log('fetching image urls')
      const newmeta = meta

      // making changes in the types and embedding image urls in the metadata.
      const metadata1 = {
        ...newmeta,
        image: imageUrl,
        seller_fee_basis_points: parseInt(newmeta.seller_fee_basis_points),
        properties: {
          ...newmeta.properties,
          files: {
            ...newmeta.properties.files[0],
            uri: imageUrl,
          },
          creators: {
            ...newmeta.properties.creators[0],
            share: parseInt(newmeta.properties.creators[0].share),
          },
        },
      }

      console.log('successfully fetched image urls')
      console.log('meta is ready')
      const metadata = JSON.stringify(metadata1) //converting into string

      const metarequest = JSON.parse(JSON.stringify(metadata))

      const metaTransaction = await arweave.createTransaction({
        data: metarequest,
      })

      metaTransaction.addTag('Content-Type', 'application/json')

      await arweave.transactions.sign(metaTransaction, {
        kty: 'RSA',
        n: '3LoeAKTIJpq2hnpQ8wIK-TUcRwBElkt8TCztASJq7_I9ZMdVXHpD5-RQqY1kVZiSimEb2zulTNLuKMGb530zJ1JsMu57aJBEW0T8pjzpcEcWAJ_s7J9hWKNB-Bow9GblFVu19CUZFOkqyEgFWtoqQd2q6jS-nVkZhzr_rT8vwQs4eluTS3gUcch97ZDY7Y03AlvJ2FnaQrrkEI1bCKmqpbe0ghT3gyn5A3CeoyvV8X4EzU2JRTlnrVHipPt1F1KsUasqQfg_6HKSBu4ygTn9s5Fk1QGnweIF0RH9wBehrVw3ZAjJWugvl8DJaebOPYnd5d4Pe8ajCtuv3SvuyOmPhLWGl7aNFVWvXoYXrmuvbkmTQoebnLPvkHMtswZCZAfUrCmQQS2wBZ0027BFeA3Isbyf1yBF7Pldi1tp_fVc_-qtSaAYZm0hc7SYyu9wYwBwj7b5dlucrUDiAvSgM-rYF-1aEPpMSjIF6MRMU4YdQkyZj40594V7v7I8HVLmZc-r6XM1KT7mYdQJUAzjbg_mG6xhlyuMQ2Zx-b7kvy9JLvRp6cjBZ1tXgyNWd5rXy1aXssnyF8aGQ4GRaOk0wtcSRqN98vrzE9xqLS3OHLZdEYVKW7ign_7S7j1kC8C4xPR0B2Dz-hdAD-RmnBOf_mMeOjZr0teU_AGMAMUW37ArPT0',
        e: 'AQAB',
        d: 'McrKedqyTAMaqbtuB2OulgklF983ma_tmkGINXlOJlK_BrzwxKvQJb-bcqQyvhxs8kp1vj72Sx5KG2eRg-b6YyR0xAiITk49HVmypM2Y23stu3ZYPAi4LQanGxDNelS72NWXdjvoLI9s10Fn89bDMZiPtcWwOk6fM6Jbivl2DFY7p16BG8U613Ai-DR0uyHgBugt4GBknCkMya8ZmhqsJDYMwkt4il4tjlkZcDWzTYbgDnAvRy5r9O1D83PGNjywIrw6DCe0QvuVdXrGaeBrGtbxqBt3fIVASqmEVJEAJ9tlo2tYAOnf0pvq07j9TWSMag5t774fiZOFWJ9QfoIxnZMDcNdXtjWtMdDmuDOHX0R2Vz1eqa9blCjeRTHaRJVSwsUoyAbR-PwobTTsYJG6sLSz4Sd8Gyn2UuoX1SnNv4Y6-mGpM8oIfkZmngVWq0kPspRGFjpu_iR4WxcYxW4AHGItiz7YynUoZ8AIeIILPf4HzCceAnVhADdLdsCvTHW0w6GnKDLEUFeqZtvMYtNH5Wr5ggLUHpLxg1WjTWtGK2FqpxAU3jq08ABZZCRxLLPSy5AA1qUFkCHYV4mI61uRMPpd7nd1w6hy-J_EW3W-1S27HraXacV2SGEzav9osqm9L-0Rl68_TFWkQGy6JOdcpadmBnDPL37-Bd_5fsLgYAE',
        p: '9p3JCa964jJ7XiiAWkYuCF1E1AjAvUUwOAEymGMeohAJvD_Q-pgIL1urilvdeOwyZDgUQ-dXnkXJev09H-CDGQeonTWyLl6qT36aB7Kuk9qzkpW9Niz018K_UNx5abX4sQrs_H5M_PC4uxt-8vZLJCOMp2WCclWqKVLGeqmJCCSwQaI9swJRd5Bxq3XYqt00AcNTosQPFPwpwj32eZGbOTgFpZq1NPwIf5iASumiZSMotQVdREjLdeOGw2R6OveJUpedyxrIBTKOlhcduYreNz8VKPEKQELLOHVK7oTyjOGJ5peWdmhO0XzGvlSZFzuiJARDTchMgWrfCCN17v4RYQ',
        q: '5SAm3pZxNwfW_50DgD20addP7ESbcZZd8AyseqBEks0VRKn550jBVxr3HtH1fR3XLsR5Pn6tE90TUvClGZd6QaxEiF1Ye8cTY1ryFV_Fmze8fSyvKcdmEKDvJaMYlhf32p0Ju8ucjNwq5xvnO4mYzGDHWXalgD_A45VszH8g2T0Wc1OUp-8XomGfGrj3enWjLxHZNUguGcU4CUf6U9ql4rWfhL7UPDCggTl0lEVpsBQiagsW8a6yGWKjgCBEpz8X_YZRfebJp7nRPxvtW6xU419JBm_bEARCwEuiBNb434pJxJXvQAd8AFcqX1zSbjaYAHh_oLKjEITJqzrqXx0NXQ',
        dp: 'lo_QK_yZTj25ucuKSRLtiae_nJ_XY_Y4sQhyJjzld9XIy8g-Qq_M13Tk7qyVMv0o6qyeGrLDeFps3ox649pCz2YwmAIvTUX4Pl4xlZ-OG7B6z3RhtxCNTqiT-r8P1O0G7reX5bMKN6aTcZAg2h5p059sgMplcH5CS8ZAbKTSh0k23ms5te8lY5SpASAKbo5r8OOaTRXbi1lD-VWxA5lUpgNA11Dzbmysl5G4SYQH5C0p7hJfVZAHv2pwXRwbz6JOkUEFUfmAwkOSb6mfOSbB8gKuXXeDZaYhwc9CNwqttjr_4OsNLi8SZ60A_TRS3q9GlyyPFo7BvoVLswFLP-SXIQ',
        dq: 'BYNtjAOgu8tDgCkeEXLqqXVV5gCMoQIWRpV3fQfoPoQS0_EnI0qb5GWwtpwkxRr3t5dgt4FC1uyF74P85Q3BEl171LAyVeAndkeU9bC1R5PixDxUBrRWn2XP-17eU5ZGD4uh1VQD81vE6ITCXqtj8t8NTPjO6LQgBxnsYUtZ1gBjTuke9Z-KOQ0SUAlNYzP7dkF-sYqIGXSmcYq62lOzlC38pawV3VDqO9HPHVZCQctqPJUBu1UR0gyOlKGyJTgecqpNwbLQ_Wk6QMOCRady73m2fyIn6k2_8XKgdm9Z0783ITTeafMEJ9nxGhRYt_A2XiSIJazGwboARE-JnjpLvQ',
        qi: 'y30NbB_LGbTwPKZ0qVZbazZh_SnnBMagTSfmssqelrUsiEstSKGsZVk1GyhAHzpoXasDGue81xlsHYp0qGzdSwsJOSFG6Qidi4MeDsTRWU62Bp8KOhah1nqvwVj9VwJwrtkf8N-crjbyzTgnJ5B2gX_NAZg0NFvoZ4lsPh7fDEQcB2P2Zu01Vwt-Zs_1qlMc4aDqVyN-TShgkSoNaH6PLwysI51BPh0Uc0XerjNwRZYPP2FdtSEVJO80apHwuOP0og6z8dBC2hTzKl6NOvbQ0Ft1cFA7-giYtFJ1aDc5oO4wpA2eTpo62Mvm6KPMWNmKdDJw8t9e3Bb0Md8fR5titQ',
      })

      console.log('https://arweave.net/' + metaTransaction.id)

      let response2 = await arweave.transactions.post(metaTransaction)
      console.log(response2)

      console.log('successfully uploaded image and metadata')

      // -------------------------------
    }
  }

  return (
    <div style={{ fontFamily: 'Poppins' }}>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <h1 style={{ margin: '20px auto ' }}>Create NFT</h1>
      </div>
      <div className="upload-header">
        {/* ----------------------------Image Uploading Section---------------------- */}

        <Container maxWidth="sm">
          <ImageUploading
            multiple
            value={images}
            onChange={onChange}
            maxNumber={maxNumber}
          >
            {({
              imageList,
              onImageUpload,
              onImageUpdate,
              onImageRemove,
              isDragging,
              dragProps,
            }) => (
              // write your building UI

              <div
                style={{
                  position: 'relative',
                  width: 200,
                  height: 200,
                  margin: '0 auto',
                }}
                className="upload__image-wrapper"
              >
                <Box
                  sx={{
                    position: 'relative',
                    width: 200,
                    height: 200,
                    margin: '0 auto',
                  }}
                >
                  <Box
                    sx={{
                      width: 200,
                      height: 200,
                      border: 1,
                      borderColor: 'grey.500',
                      borderRadius: 1,
                    }}
                  >
                    {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                    <label htmlFor="icon-button-file">
                      <IconButton
                        sx={{
                          position: 'absolute',
                          left: '50%',
                          top: '50%',
                          transform: 'translate(-50%, -50%)',
                        }}
                        color="primary"
                        onClick={onImageUpload}
                        {...dragProps}
                        aria-label="upload picture"
                        component="span"
                      >
                        <MdAddPhotoAlternate
                          style={{ color: 'grey', fontSize: 70 }}
                        />
                      </IconButton>
                    </label>
                  </Box>
                  &nbsp;
                  {imageList.map((image, index) => (
                    <ImageComponent
                      image={image}
                      index={index}
                      onImageRemove={onImageRemove}
                    />
                  ))}
                </Box>
              </div>
            )}
          </ImageUploading>
        </Container>

        {/* ----------Metadata Section -------------------------------- */}
        <Box>
          <div>
            {/* cl */}

            <Box m={3}>
              <Stack direction="row" spacing={2} justifyContent="center">
                <TextField
                  label="Name"
                  value={meta.name}
                  name="name"
                  onChange={onChangeName}
                  // required={true}
                  required
                />
                <TextField
                  label="symbol"
                  value={meta.symbol}
                  name="symbol"
                  onChange={onChangeName}
                  required
                />
              </Stack>
            </Box>

            <Box m={3}>
              <Stack direction="row" spacing={2} justifyContent="center">
                <TextField
                  label="description"
                  value={meta.description}
                  name="description"
                  onChange={onChangeName}
                  required
                />
                <TextField
                  label="seller fee basis points"
                  value={meta.seller_fee_basis_points}
                  name="seller_fee_basis_points"
                  onChange={onChangeSeller}
                  required
                />
              </Stack>
            </Box>
            {meta.attributes.map((x, i) => {
              return (
                <>
                  <div key={i}>
                    <Box m={2}>
                      <Stack
                        direction="row"
                        spacing={2}
                        justifyContent="center"
                      >
                        <TextField
                          placeholder="eg. Eyes"
                          label="trait_type"
                          value={x.trait_type}
                          name="trait_type"
                          onChange={(e) => onChangeAttr(e, i)}
                          required
                        />
                        <TextField
                          placeholder="eg. Red"
                          label="value"
                          value={x.value}
                          name="value"
                          onChange={(e) => onChangeAttr(e, i)}
                          required
                        />

                        {i > 0 ? (
                          <Button
                            size="small"
                            onClick={onremoveAttr}
                            sx={{ border: '1px solid black' }}
                          >
                            <IoIosRemove style={{ color: 'black' }} />
                          </Button>
                        ) : (
                          <Button
                            sx={{ border: '1px solid black' }}
                            size="small"
                            onClick={onclick}
                          >
                            <GrAdd style={{ color: '' }} />
                          </Button>
                        )}
                      </Stack>
                    </Box>
                  </div>
                </>
              )
            })}

            {/* Properties */}
            {meta.properties.files.map((v, z) => {
              return (
                <>
                  <Box m={3}>
                    <Stack direction="row" spacing={2} justifyContent="center">
                      <TextField
                        placeholder="image/png"
                        label="type"
                        value={meta.properties.files[0].type}
                        name="type"
                        onChange={onChangePropType}
                        required
                      />
                      <TextField
                        label="category"
                        placeholder="image"
                        value={meta.properties.category}
                        name="category"
                        onChange={onchangeCategory}
                        required
                      />
                    </Stack>
                  </Box>
                </>
              )
            })}

            {meta.properties.creators.map((x, i) => {
              return (
                <>
                  <div key={i}>
                    <Box m={2}>
                      <Stack
                        direction="row"
                        spacing={2}
                        justifyContent="center"
                      >
                        <TextField
                          label="Address"
                          value={x.address}
                          name="address"
                          onChange={(e) => onchangeAddress(e, i)}
                          required
                        />
                        <TextField
                          label="Share"
                          value={x.share}
                          name="share"
                          onChange={(e) => onchangeAddress(e, i)}
                          required
                        />

                        {i > 0 ? (
                          <Button
                            size="small"
                            onClick={removeadd}
                            sx={{ border: '1px solid black' }}
                          >
                            <IoIosRemove style={{ color: 'black' }} />
                          </Button>
                        ) : (
                          <Button
                            sx={{ border: '1px solid black' }}
                            size="small"
                            onClick={onclickadd}
                          >
                            <GrAdd style={{ color: '' }} />
                          </Button>
                        )}
                      </Stack>
                    </Box>
                  </div>
                </>
              )
            })}
          </div>
        </Box>

        <Button variant="contained" className="mb-4" onClick={Ar} size="large">
          Upload
        </Button>
      </div>
    </div>
  )
}

export default Upload
