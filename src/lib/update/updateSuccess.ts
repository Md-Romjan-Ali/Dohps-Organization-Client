import { GetSuccess } from "@/app/(main)/success/page"
import { token } from "../token"

const SERVER_URI = process.env.NEXT_PUBLIC_URI
export const updateSuccessStory = async (data: GetSuccess, id: string) => {
    const tokens = await token()

    const res = await fetch(`${SERVER_URI}/api/updatesuccess/${id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            authorization: `Bearer ${tokens}`
        },
        body: JSON.stringify(data)
    })
    return res.json()
}