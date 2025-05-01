import LocaleSwitcher from "@/app/components/LocaleSwitcher"
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

                    </div>
                </div>
            </div>
        </header>
    )
}