"use client"
import { deleteSuccessStory } from '@/lib/deleteSuccess/deleteSuccess';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { UpdateModal } from './UpdateStory';
import { Spinner } from '@heroui/react';
interface props {
    id: string
}
const ManageCostomHandle = ({ id }: props) => {
    const [deleteLoading, setDeleteLoading] = useState(false)
    const router = useRouter()
    const deleteHandle = async () => {
        setDeleteLoading(true)
        const deleteStory = await deleteSuccessStory(id)
        console.log(deleteStory, 'from delte page');
        setDeleteLoading(false)
        router.refresh()
        toast.success('Delete Successfull')
    }
    return (
        <div>
            <div className="flex items-center justify-center gap-3">

                <UpdateModal id={id} />
                <button
                    onClick={deleteHandle}
                    className="rounded-lg bg-red-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-red-700"
                >
                    {
                        deleteLoading ?
                            <div className="flex flex-col items-center gap-2">
                                <Spinner color="current" />
                            </div> : 'Delete'
                    }

                </button>
            </div>
        </div>
    );
};

export default ManageCostomHandle;