
export const getSuccessData = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_URI}/api/getsuccessdata`)

    return res.json()
}
// details
export const getDetailsSuccessData = async (id: string) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_URI}/api/getsuccessdata/${id}`)
    return res.json()
}