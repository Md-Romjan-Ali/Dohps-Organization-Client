import { token } from "../token"

const SERVER_URI = process.env.NEXT_PUBLIC_URI
export const deleteSuccessStory = async (id: string) => {
    const tokens = await token()
    const res = await fetch(`${SERVER_URI}/api/deletesuccessdata/${id}`, {
        method: "DELETE",
        headers: {
            authorization: `Bearer ${tokens}`
        }
    })
    return res.json()
}