import Link from "next/link"

export default function courses() {

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

                        <Link className=" active text-decoration-none" href="/courses"><i className="bi bi-mortarboard me-2 "></i>Courses</Link>
                        <Link className="text-decoration-none" href="/blog"><i className="bi bi-journal-text me-2 "></i>Blog</Link>
                        <Link className="text-decoration-none" href="/contacts"><i className="bi bi-telephone me-2 "></i>Contacts</Link>
                    </div>


                </nav>

                <h1 className="fw-bold">Our Courses</h1>
            </section>

            <section className="mt-5 pt-5">
                <h3 className="text-center fs-1 fw-bold mb-4">Courses we offer</h3>
                <p style={{ marginLeft: "11rem" }} className="text-center text-secondary w-75 mb-5">Explore the intersection of technology and society. Learn about environmental justice. Take the famous Problem of God course. Our innovative courses inspire and invite you to help solve some of today’s most pressing local, national and global issues.</p>
                <div className="container  mt-5 pt-5">
                    <div className="row">
                        <div className="col-md-4">
                            <div style={{ backgroundColor: " #fff3f3" }} className="card bg">
                                <h3 className="text-center mt-3 fs-5 p-2">Undergraduate Programs</h3>
                                <p className="text-center text-secondary p-1">For decades, Eduford College has improved the health of our communities, one graduate at a time. The JoAnn McGrath School of Nursing and Health Professions, as one of the largest nursing schools in Wisconsin, offers a wide array of fully accredited nursing programs, guaranteed clinical placements and a technology-rich Center for Clinical Education.</p>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div style={{ backgroundColor: " #fff3f3" }} className="card">
                                <h3 className="text-center fs-5 mt-3 p-2">Graduate Programs</h3>
                                <p className="text-center text-secondary p-1">For decades, Eduford College has improved the health of our communities, one graduate at a time. The JoAnn McGrath School of Nursing and Health Professions, as one of the largest nursing schools in Wisconsin, offers a wide array of fully accredited nursing programs, guaranteed clinical placements and a technology-rich Center for Clinical Education.</p>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div style={{ backgroundColor: " #fff3f3" }} className="card">
                                <h3 className="text-center fs-5 mt-3 p-2">Post Graduation</h3>
                                <p className="text-center text-secondary p-1">For decades, Eduford College has improved the health of our communities, one graduate at a time. The JoAnn McGrath School of Nursing and Health Professions, as one of the largest nursing schools in Wisconsin, offers a wide array of fully accredited nursing programs, guaranteed clinical placements and a technology-rich Center for Clinical Education.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="mt-5 pt-5">
                <h3 className="text-center fs-1 fw-bold">Our Facilities</h3>
                <p style={{ marginLeft: "11rem" }} className="text-center text-secondary w-75 mb-5">We commit to meet the financial need of every admitted undergraduate student. We don’t consider your ability to pay when we review your application, and we don’t base our decision on whether you can cover the cost. If you’re accepted here, you belong here.</p>
                <div className="container mt-5 pt-5">
                    <div className="row">
                        <div className="col-md-4">
                            <img src="/library.png" className="img-fluid rounded " alt="" />
                            <h3 className="text-start fw-bold fs-5 mt-2">Undergraduate Programs</h3>
                            <p style={{ fontSize: "14px" }} className="text-secondary mt-2 ">For decades, Eduford College has improved the health of our communities, one graduate at a time. The JoAnn McGrath School of Nursing and Health Professions, as one of the largest nursing schools in Wisconsin, offers a wide array of fully accredited nursing programs, guaranteed clinical placements and a technology-rich Center for Clinical Education.</p>
                        </div>
                        <div className="col-md-4">
                            <img src="/basketball.png" className="img-fluid rounded" alt="" />
                            <h3 className="text-start fw-bold fs-5 mt-2">Graduate Programs</h3>
                            <p style={{ fontSize: "14px" }} className="text-secondary mt-2 ">Building on our strong roots in leadership, health care and education, Eduford is proud to offer an array of coed graduate programs for women and men who are ready to advance their careers and grow as leaders. The Eduford College Community Psychology Master's program will help you to meet your goals of becoming a Licensed Professional Counselor</p>
                        </div>
                        <div className="col-md-4">
                            <img src="/cafeteria.png" className="img-fluid rounded" alt="" />
                            <h3 className="text-start fw-bold fs-5 mt-2">Post Graduation</h3>
                            <p style={{ fontSize: "14px" }} className="text-secondary mt-2 ">The Eduford, as one of the largest nursing schools in Wisconsin, offers a wide array of fully accredited nursing programs, guaranteed clinical placements and a technology-rich Center for Clinical Education. The Eduford College Community Psychology Master's program will help you to meet your goals of becoming a Licensed Professional Counselor.</p>
                        </div>
                    </div>

                </div>
            </section>


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