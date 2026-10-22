import Link from "next/link"

export default function blog() {

    return (
        <>

            <section className="background">
                <nav>
                    <div className="logo">
                        <img src="/logo.png" alt="" />
                    </div>
                    <div className="disp">
                        <Link className=" text-decoration-none" href="/"><i className="bi bi-house me-2 "></i>Inicio</Link>
                        <Link className="text-decoration-none" href="/about"><i className="bi bi-info-circle me-2 "></i>sobre Nós</Link>

                        <Link className="active text-decoration-none" href="/cursos"><i className="bi bi-mortarboard me-2 "></i>Cursos</Link>
                        <Link className="text-decoration-none" href="/programas"><i className="bi bi-journal-text me-2 "></i>Programas</Link>
                        <Link className="text-decoration-none" href="/contacts"><i className="bi bi-telephone me-2 "></i>Contactos</Link>
                    </div>


                </nav>

                <h1 className="fw-bold">Cursos Para o ano lectivo 2026/2027</h1>
            </section>



            <section className="mt-5 pt-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-7">
                            <img src="/certificate.jpg" className="img-fluid" alt="" />
                        </div>

                        <div className="col-md-5">
                            <div style={{ backgroundColor: "#f44336", padding: "5px" }} className="top ">
                                <h3 className="text-center text-white fs-5 fw-bold">Cursos Disponiveis</h3>
                            </div>
                            <div className="category mt-3 text-secondary">
                                <p><i className="bi bi-arrow-up-right-circle me-2"></i>Estatisticas de Negócio</p>
                                <p><i className="bi bi-cpu me-2"></i>Ciências da computação</p>
                                <p><i className="bi bi-database me-2"></i>Analise de Dados</p>
                                <p><i className="bi bi-heart-pulse  me-2"></i>Medicina</p>
                                <p><i className="bi bi-pencil me-2"></i>AutoCAD</p>
                                <p><i className="bi bi-controller me-2"></i>Jogos</p>
                                <p><i className="bi bi-boombox me-2"></i>Música</p>
                                <p><i className="bi bi-gear me-2"></i>Mecânica</p>
                                <p><i className="bi bi-journal-bookmark me-2"></i>jornalismo</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="container mt-4">
                <h3 className="fw-bold">Certificados e Cursos Online 2027</h3>
                <p style={{ width: "60%" }} className="text-secondary mt-4 ">In sollicitudin elit dolor. Suspendisse lacinia vitae mi et tincidunt. Etiam magna magna, bibendum non est in, hendrerit aliquet urna. Donec elementum, lectus non tempor laoreet, nisl tellus vestibulum felis, eget ornare neque ante vel arcu. Nullam nec vulputate ligula, suscipit congue velit. Ut elementum vulputate nulla suscipit pretium. Curabitur et mi urna. Vestibulum sit amet pulvinar erat, id varius lacus. Proin nunc mi, tempus auctor euismod in, bibendum id tortor. Quisque eget hendrerit enim. Etiam consectetur sapien nisl, in porta erat placerat eu. Maecenas fermentum nisi eget mi bibendum dignissim. Integer varius interdum est, eu mollis sem euismod a. Nullam eget blandit mi.</p>
                <p style={{ width: "60%" }} className="text-secondary mt-4 ">In sollicitudin elit dolor. Suspendisse lacinia vitae mi et tincidunt. Etiam magna magna, bibendum non est in, hendrerit aliquet urna. Donec elementum, lectus non tempor laoreet, nisl tellus vestibulum felis, eget ornare neque ante vel arcu. Nullam nec vulputate ligula, suscipit congue velit. Ut elementum vulputate nulla suscipit pretium. Curabitur et mi urna. Vestibulum sit amet pulvinar erat, id varius lacus. Proin nunc mi, tempus auctor euismod in, bibendum id tortor. Quisque eget hendrerit enim. Etiam consectetur sapien nisl, in porta erat placerat eu. Maecenas fermentum nisi eget mi bibendum dignissim. Integer varius interdum est, eu mollis sem euismod a. Nullam eget blandit mi.</p>
            </section>

            <section className="container mt-5 pt-5">

                <div className="row">
                    <div className="col-md-7">
                        <div style={{ padding: "20px" }} className="card rounded-0">
                            <h5 style={{ fontSize: "16px" }} className="fw-bold mb-4">Deixe o seu Comentário</h5>
                            <input style={{ backgroundColor: "#ccc", fontSize: "14px" }} type="text" className="form-control rounded-0" name="" id="" placeholder="Digite seu Nome" required />
                            <input style={{ backgroundColor: "#ccc", fontSize: "14px" }} type="email" className="form-control rounded-0 mt-4" name="" id="" placeholder="Digite seu Email" required />
                            <textarea style={{ backgroundColor: "#ccc", fontSize: "14px" }} className="mt-4 form-control rounded-0" placeholder="Comenta Aqui" rows={7} name="" id="" required></textarea>
                            <button className="btns2 mt-5">Comentar</button>
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

                    <p style={{ marginTop: "2rem" }} className=" pt-5 text-center text-white">Universidade Eduford <br /> Todos sos Direitos Reservados &copy; 2027</p>
                </footer>
            </section>

        </>
    )

}