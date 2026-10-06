import Link from "next/link"
export default function about() {

    return (
        <>

            <section className="background">
                <nav>
                    <div className="logo">
                        <img src="/logo.png" alt="" />
                    </div>
                    <div className="disp">
                        <Link className=" text-decoration-none" href="/"><i className="bi bi-house me-2 "></i>Home</Link>
                        <Link className="active text-decoration-none" href="/about"><i className="bi bi-info-circle me-2 "></i>About</Link>

                        <Link className="text-decoration-none" href="/courses"><i className="bi bi-mortarboard me-2 "></i>Courses</Link>
                        <Link className="text-decoration-none" href="/blog"><i className="bi bi-journal-text me-2 "></i>Blog</Link>
                        <Link className="text-decoration-none" href="/contacts"><i className="bi bi-telephone me-2 "></i>Contacts</Link>
                    </div>


                </nav>


                <h1 className="fw-bold">About Us</h1>
            </section>
            <div className="container mt-5 pt-5">
                <div className="row">
                    <div className="col-md-6">
                        <h3 className="fw-bold fs-4 text-start">We are the world's largest teaching platform</h3>
                        <p style={{ fontSize: "14px" }} className="text-secondary lh-lg">Eduford University is one of the world’s leading academic and research institutions, offering a unique educational experience that prepares the next generation of global citizens to lead and make a difference in the world. We are a vibrant community of exceptional students, faculty, alumni and professionals dedicated to real-world applications of our research, scholarship, faith and service. Established in 1989, Eduford is the nation’s oldest Catholic and Jesuit university. Drawing upon the 450-year-old legacy of Jesuit education, we provide students with a world-class learning experience focused on educating the whole person through exposure to different faiths, cultures and beliefs.</p>
                        <button className="btns2"><Link href="/contacts" className="text-danger text-decoration-none">Contact Us</Link></button>
                    </div>

                    <div className="col-md-6">
                        <img src="/about.jpg" className="img-fluid ms-4" alt="" />
                    </div>
                </div>
            </div>

            <section style={{ marginTop: "15rem" }} className="  pt-5">

                <footer className="bg-danger p-1 ">
                    <div className="icons text-center mt-5">
                        <Link className="text-decoration-none" href="https://instagram.com"><i className="bi bi-instagram me-3 text-white fs-5"></i></Link>
                        <Link className="text-decoration-none" href="https://facebook.com">  <i className="bi bi-facebook me-3 text-white fs-5"></i></Link>
                        <Link className="text-decoration-none" href="https://linkedin.com"> <i className="bi bi-linkedin text-white fs-5 me-2"></i></Link>
                        <Link className="text-decoration-none" href="https://twitter.com"><i className="bi bi-twitter  text-white fs-5 "></i></Link>
                    </div>

                    <div style={{ marginLeft: "25rem", marginTop: "7rem" }} className="logo text-center">
                        <img src="/logo.png" alt="" />
                    </div>

                    <p style={{ marginTop: "2rem" }} className=" pt-5 text-center text-white">Eduford University <br /> Todos sos Direitos Reservados &copy; 2027</p>
                </footer>
            </section>


        </>
    )

}