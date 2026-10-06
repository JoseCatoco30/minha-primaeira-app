import Link from "next/link"

export default function contacts() {

    return (
        <>

            <section className="background">
                <nav>
                    <div className="logo">
                        <img src="/logo.png" alt="" />
                    </div>
                    <div className="disp">
                        <Link className=" text-decoration-none" href="/"><i className="bi bi-house me-2 "></i>Home</Link>
                        <Link className="text-decoration-none" href="/about"><i className="bi bi-info-circle me-2 "></i>About</Link>

                        <Link className="text-decoration-none" href="/courses"><i className="bi bi-mortarboard me-2 "></i>Courses</Link>
                        <Link className="text-decoration-none" href="/blog"><i className="bi bi-journal-text me-2 "></i>Blog</Link>
                        <Link className="active text-decoration-none" href="/contacts"><i className="bi bi-telephone me-2 "></i>Contacts</Link>
                    </div>


                </nav>

                <h1 className="fw-bold">Contacts</h1>
            </section>
        </>
    )

}