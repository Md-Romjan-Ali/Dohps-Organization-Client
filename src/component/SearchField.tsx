"use client";

import { Form, Label, SearchField } from "@heroui/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export function SearchComponent() {
    const router = useRouter()
    const [search, setSearch] = useState("");
    console.log(search, 'from search');
    useEffect(() => {

        router.push(`/success?search=${search}`)
    }, [search, router])
    return (
        <Form className="w-full flex justify-center mb-4">
            <SearchField
                name="search"
                value={search}
                onChange={setSearch}
                className="w-full max-w-md lg:max-w-xl"
            >
                <Label className="mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                    Search by Student or University
                </Label>

                <SearchField.Group
                    className="
        flex items-center
        rounded-xl
        border border-gray-300 dark:border-gray-700
        bg-white dark:bg-slate-900
        shadow-sm
        focus-within:ring-2 focus-within:ring-blue-500
        transition-all
      "
                >
                    <SearchField.SearchIcon className="ml-3 text-gray-500 dark:text-gray-400" />

                    <SearchField.Input
                        className="
          h-12
          w-full
          bg-transparent
          px-3
          text-base
          text-gray-900
          placeholder:text-gray-500
          outline-none
          dark:text-white
          dark:placeholder:text-gray-400
        "
                        placeholder="Search by student or university..."
                    />

                    <SearchField.ClearButton className="mr-3 text-gray-500 hover:text-red-500 dark:text-gray-400" />
                </SearchField.Group>
            </SearchField>

        </Form>


    );
}