"use client"

import LocaleSwitcher from "@/app/components/LocaleSwitcher"
import { signOut } from "next-auth/react";
import Image from "next/image"

export const Header = () => {
    return (
        <header>
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-2 py-4 items-center justify-between">
                    <div className="logo">
                        <Image
                            src="logo.svg"
                            alt="logo"
                            width={100}
                            height={100}
                        />
                    </div>
                    <div className="grid grid-cols-2 justify-end">
                        <LocaleSwitcher />
                        <button
                            onClick={() =>
                                signOut({
                                callbackUrl: "/", // You can change this to another redirect URL
                                })
                            }
                            className="text-sm px-4 py-2 bg-red-500 text-white rounded"
                            >
                            Logout
                        </button>
                    </div>
                </div>
            </div>
        </header>
    )
}