import { token } from "../token"

const SERVER_URI = process.env.NEXT_PUBLIC_URI
export interface SuccessData {
    image: File | string,
    title: string,
    description: string
}
export const postSuccessData = async (data: SuccessData) => {
    const tokens = await token()
    console.log(tokens, 'from post');
    const res = await fetch(`${SERVER_URI}/api/success`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            authorization: `Bearer ${tokens}`
        },
        body: JSON.stringify(data)
    })
    return res.json()
}