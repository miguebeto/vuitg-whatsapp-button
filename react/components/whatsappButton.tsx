import React from 'react'
import PropTypes from 'prop-types'

type Props = {
    logo: string,   //whatsApp.png
    phone: string,  //3058779813
    message: string,  //Estás comunicándote con VTEX University, por favor ingresa tu duda.
    width: number,    //80px
    height: number    //80px

}

const whatsappButton = ({ logo, phone, message, width, height }: Props) => {
    const formattedMessage = message.replace(/ /g, "%20")
    console.log("mi mensaje formateado es :", formattedMessage, logo);
    return <>
        <div className='fixed botton-2 right-2 flex flexColumn'>
            <a
                href={`https://wa.me/${phone}?text=Me%20interesa%20in%20el%20auto%20que%20vendes`}
                target='_blank'
                rel="noreferrer noopener"
            >
                <img
                    src={logo}
                    width={width}
                    height={height}
                    alt='logo de whatsapp'
                />
            </a>
        </div>
    </>
}

whatsappButton.propTypes = {
    logo: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    message: PropTypes.string
}

whatsappButton.defaultProps = {
    logo: "mi-logo.png",
    phone: "3058779813",
    message: "Estás comunicando con vtex university, por favor, ingresa tu duda"
}

whatsappButton.schema = {
    title: "boton de whatsapp",
    type: "object",
    properties: {
        logo: {
            title: "logo de whatsapp que se relaciona con la marca",
            type: "string",
            widget: {
                "ui:widget": "image-uploader"
            }
        },
        phone: {
            title: "teléfono",
            description: "agrega por favor el numero del telefono",
            type: "string"
        },
        message: {
            title: "Mensaje",
            description: "agrega por favor el mensaje que se verá para tu cliente",
            type: "string",
            widget: {
                "ui:widget": "textarea"
            }
        },
        width: {
            title: "Mensaje",
            description: "agrega por favor el mensaje que se verá para tu cliente",
            type: "number"
        },
        height: {
            title: "Mensaje",
            description: "agrega por favor el mensaje que se verá para tu cliente",
            type: "number"
        }
    }
}

export default whatsappButton