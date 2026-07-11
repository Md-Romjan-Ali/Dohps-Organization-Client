const SERVER_URI = process.env.NEXT_PUBLIC_URI
export interface SuccessData {
    image: File | string,
    title: string,
    description: string
}
export const postSuccessData = async (data: SuccessData) => {
    const res = await fetch(`${SERVER_URI}/api/success`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    return res.json()
}