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

            <section className="mt-5 pt-5">
                <div className="container">
                    <img src="/image.png" className="img-fluid" alt="" />
                </div>
            </section>


            <section className="mt-5 pt-5">

                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <h3 className=" fs-5 fw-bold"><i className="bi bi-house-fill text-danger fs-4 me-3"></i>University of Engineering and Management, <span className="ms-5 ps-2">Gurukul Campus</span></h3>
                            <p className="ms-5 text-secondary">Angola, Luanda</p> <br />
                            <h3 className=" fs-3 fw-bold"><i className="bi bi-telephone-fill text-danger fs-4 me-3"></i>945028096 - 953314520</h3>
                            <p className="ms-5 text-secondary">Monday to Friday, at 05:00AM to 09:30PM </p> <br />
                            <h3 className=" fs-5 fw-bold"><i className="bi bi-envelope-fill text-danger fs-4 me-3"></i>Eduford@gmail.com</h3>
                            <p style={{ marginLeft: "35px" }} className=" text-secondary">Send Your Message</p>
                        </div>

                        <div className="col-md-6">
                            <div style={{ padding: "20px" }} className="card rounded-0">
                                <h5 style={{ fontSize: "16px" }} className="fw-bold mb-4">Send You Message</h5>
                                <input style={{ backgroundColor: "#ccc", fontSize: "14px" }} type="email" className="form-control rounded-0 mt-4" name="" id="" placeholder="Enter You Email" required />
                                <input style={{ backgroundColor: "#ccc", fontSize: "14px" }} type="text" className="form-control rounded-0 mt-4" name="" id="" placeholder="Enter You Subject" required />
                                <textarea style={{ backgroundColor: "#ccc", fontSize: "14px" }} className="mt-4 form-control rounded-0" placeholder="Enter Your Message" rows={7} name="" id="" required></textarea>
                                <button type="submit" className="btns2 mt-5">Send Message</button>
                            </div>

                        </div>


                    </div>
                </div>

            </section>


            <section style={{ marginTop: "25rem" }} className="  pt-5">

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