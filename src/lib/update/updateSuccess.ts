import { GetSuccess } from "@/app/(main)/success/page"

const SERVER_URI = process.env.NEXT_PUBLIC_URI
export const updateSuccessStory = async (data: GetSuccess, id: string) => {
    const res = await fetch(`${SERVER_URI}/api/updatesuccess/${id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    return res.json()
}