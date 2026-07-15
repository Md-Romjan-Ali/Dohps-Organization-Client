
export const getSuccessData = async (search: string = "") => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_URI}/api/getsuccessdata?search=${encodeURIComponent(search)}`, {
        cache: 'no-store',
    })

    return res.json()
}
// details
export const getDetailsSuccessData = async (id: string) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_URI}/api/getsuccessdata/${id}`, {
        cache: 'no-store',
    })
    return res.json()
}