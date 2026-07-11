const SERVER_URI = process.env.NEXT_PUBLIC_URI
export const getSuccessData = async () => {
    const res = await fetch(`${SERVER_URI}/api/getsuccessdata`)
    return res.json()
}
// details
export const GetDetailsSuccessData = async (id: string) => {
    const res = await fetch(`${SERVER_URI}/api/getsuccessdata/${id}`)
    return res.json()
}