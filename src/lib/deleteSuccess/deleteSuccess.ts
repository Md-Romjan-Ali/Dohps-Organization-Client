const SERVER_URI = process.env.NEXT_PUBLIC_URI
export const deleteSuccessStory = async (id: string) => {
    const res = await fetch(`${SERVER_URI}/api/deletesuccessdata/${id}`, {
        method: "DELETE"
    })
    return res.json()
}