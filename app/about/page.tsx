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
                        <Link className=" text-decoration-none" href="/"><i className="bi bi-house me-2 "></i>Inicio</Link>
                        <Link className="active text-decoration-none" href="/about"><i className="bi bi-info-circle me-2 "></i>sobre Nós</Link>

                        <Link className=" text-decoration-none" href="/cursos"><i className="bi bi-mortarboard me-2 "></i>Cursos</Link>
                        <Link className="text-decoration-none" href="/programas"><i className="bi bi-journal-text me-2 "></i>Programas</Link>
                        <Link className="text-decoration-none" href="/contacts"><i className="bi bi-telephone me-2 "></i>Contactos</Link>
                    </div>


                </nav>


                <h1 className="fw-bold">Sobre Nós</h1>
            </section>
            <div className="container mt-5 pt-5">
                <div className="row">
                    <div className="col-md-6">
                        <h3 className="fw-bold fs-4 text-start">Nós Somos a Melhor de Angola</h3>
                        <p style={{ fontSize: "14px" }} className="text-secondary lh-lg">Nós somos a Edufor teremos prazer de receber te aqui na familia a edufor foi fundada ao 22 de Abril de 1980 em Luanda Angola pelo nosso Querido e Senhor Pedro Malheiro ele foi um grande politico árabe que revolucionou o mundo da politica então quandro veio em Angola surgiu-lhe a ideia de criar uma unvirsidade ele mais a sua familia tiveram a iniciativa de cria a eduford por meios de materias fracos como paus , adobo entre outros mais com o passar do tempo e desenvilvimento tecnologico então a universidade foi crescendo ese tronou no ranking mundia a 4 melhor do mundo então de cabeça erguida a edufor cresceu até o que é hoje</p>
                        <button className="btns2"><Link href="/contacts" className="text-danger text-decoration-none">Contacta-nos</Link></button>
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

                    <p style={{ marginTop: "2rem" }} className=" pt-5 text-center text-white">Universidade Eduford<br /> Todos sos Direitos Reservados &copy; 2027</p>
                </footer>
            </section>


        </>
    )

}