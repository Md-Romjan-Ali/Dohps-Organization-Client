"use client";

import { GetSuccess } from "@/app/(main)/success/page";
import { updateSuccessStory } from "@/lib/update/updateSuccess";
import { Button, Modal } from "@heroui/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import { BiRocket } from "react-icons/bi";
interface props {
    id: string
}
export function UpdateModal({ id }: props) {
    const [loading, setLoading] = useState(false)
    const router = useRouter()
    const updateSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setLoading(true)
        const formData = new FormData(e.currentTarget)
        const data = Object.fromEntries(formData.entries()) as unknown as GetSuccess
        const update = await updateSuccessStory(data, id)
        toast.success('Update Success Story Successfull')
        setLoading(false)
        router.refresh()
        console.log(update);
    }
    return (
        <div className="flex flex-wrap gap-4">
            <Modal>
                <Button variant="primary">
                    Update
                </Button>
                <Modal.Backdrop>
                    <Modal.Container>
                        <Modal.Dialog className="">
                            <Modal.CloseTrigger />
                            <Modal.Header>
                                <Modal.Icon className="bg-default text-foreground">
                                    <BiRocket className="size-5" />
                                </Modal.Icon>
                                <Modal.Heading>
                                    <h2 className="text-2xl font-bold text-neutral-900 dark:text-white">
                                        Update Story
                                    </h2>
                                </Modal.Heading>
                            </Modal.Header>
                            <Modal.Body>


                                <form onSubmit={updateSubmit} className="space-y-6">
                                    {/* Student Name */}
                                    <div className="flex flex-col gap-2">
                                        <label
                                            htmlFor="studentName"
                                            className="text-sm font-medium text-neutral-700 dark:text-neutral-300"
                                        >
                                            Student Name <span className="text-red-500">*</span>
                                        </label>

                                        <input
                                            id="studentName"
                                            name="studentName"
                                            type="text"
                                            required
                                            placeholder="Enter student's full name"
                                            className="w-full rounded-md border border-neutral-300 bg-transparent px-4 py-2.5 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500 dark:border-neutral-700 dark:text-white"
                                        />
                                    </div>

                                    {/* University Name */}
                                    <div className="flex flex-col gap-2">
                                        <label
                                            htmlFor="universityName"
                                            className="text-sm font-medium text-neutral-700 dark:text-neutral-300"
                                        >
                                            University Name <span className="text-red-500">*</span>
                                        </label>

                                        <input
                                            id="universityName"
                                            name="universityName"
                                            type="text"
                                            required
                                            placeholder="Enter university name"
                                            className="w-full rounded-md border border-neutral-300 bg-transparent px-4 py-2.5 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500 dark:border-neutral-700 dark:text-white"
                                        />
                                    </div>

                                    {/* Image URL */}
                                    <div className="flex flex-col gap-2">
                                        <label
                                            htmlFor="image"
                                            className="text-sm font-medium text-neutral-700 dark:text-neutral-300"
                                        >
                                            Image URL <span className="text-red-500">*</span>
                                        </label>

                                        <input
                                            id="image"
                                            name="image"
                                            type="url"
                                            required
                                            placeholder="https://example.com/image.jpg"
                                            className="w-full rounded-md border border-neutral-300 bg-transparent px-4 py-2.5 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500 dark:border-neutral-700 dark:text-white"
                                        />
                                    </div>

                                    {/* Story Title */}
                                    <div className="flex flex-col gap-2">
                                        <label
                                            htmlFor="title"
                                            className="text-sm font-medium text-neutral-700 dark:text-neutral-300"
                                        >
                                            Story Title <span className="text-red-500">*</span>
                                        </label>

                                        <input
                                            id="title"
                                            name="title"
                                            type="text"
                                            required
                                            placeholder="e.g. From Student to Software Engineer"
                                            className="w-full rounded-md border border-neutral-300 bg-transparent px-4 py-2.5 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500 dark:border-neutral-700 dark:text-white"
                                        />
                                    </div>

                                    {/* Description */}
                                    <div className="flex flex-col gap-2">
                                        <label
                                            htmlFor="description"
                                            className="text-sm font-medium text-neutral-700 dark:text-neutral-300"
                                        >
                                            Success Story <span className="text-red-500">*</span>
                                        </label>

                                        <textarea
                                            id="description"
                                            name="description"
                                            rows={6}
                                            required
                                            placeholder="Write the student's success story, achievements, learning journey, and career milestones..."
                                            className="w-full resize-none rounded-md border border-neutral-300 bg-transparent px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500 dark:border-neutral-700 dark:text-white"
                                        />
                                    </div>

                                    {/* Submit Button */}
                                    <button
                                        type="submit"
                                        className="flex w-full items-center justify-center rounded-md bg-blue-600 px-4 py-3 text-sm font-semibold text-white transition duration-200 hover:bg-blue-700"
                                    >
                                        {
                                            loading ?
                                                'Savin...'
                                                :
                                                'Save'
                                        }

                                    </button>
                                </form>

                            </Modal.Body>
                            <Modal.Footer>
                                <Button
                                    variant="ghost"
                                    className="w-full" slot="close">
                                    close
                                </Button>
                            </Modal.Footer>
                        </Modal.Dialog>
                    </Modal.Container>
                </Modal.Backdrop>
            </Modal>
        </div>
    );
}