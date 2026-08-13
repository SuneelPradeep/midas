import Image from "next/image"

const Careers = () => {
    return (
        <section>
            <div className="relative w-full max-w-311 aspect-1244/720 overflow-hidden rounded-[30%_70%_70%_30%/50%_60%_40%_50%] select-none">
                <Image
                    src="/team.jpg"
                    alt="careers"
                    fill
                    sizes="(max-w-[1244px]) 100vw, 1244px"
                    className="object-cover"
                    priority
                />
            </div>
        </section>
    )
}

export default Careers