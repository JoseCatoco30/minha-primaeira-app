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
                        <Link className=" text-decoration-none" href="/"><i className="bi bi-house me-2 "></i>Inicio</Link>
                        <Link className="text-decoration-none" href="/about"><i className="bi bi-info-circle me-2 "></i>sobre Nós</Link>

                        <Link className="text-decoration-none" href="/cursos"><i className="bi bi-mortarboard me-2 "></i>Cursos</Link>
                        <Link className="active text-decoration-none" href="/programas"><i className="bi bi-journal-text me-2 "></i>Programas</Link>
                        <Link className="text-decoration-none" href="/contacts"><i className="bi bi-telephone me-2 "></i>Contactos</Link>
                    </div>


                </nav>

                <h1 className="fw-bold">Nossos Planos pra o seu Futuro</h1>
            </section>

            <section className="mt-5 pt-5">
                <h1 className="text-center fw-bold mb-5">Planos que Nós Oferecmos</h1>
                <p style={{ marginLeft: "11rem" }} className="text-center text-secondary w-75 mb-5">Explore mais sobre os conhencimentos científicos que a nossa universidade apresenta de modo a expandir o desenvolvimento dos nossos estudantes e da população Angolana</p>
                <div className="container pt-2">
                    <div className="row">
                        <div className="col-md-4">
                            <div style={{ backgroundColor: " #fff3f3" }} className="card bg">
                                <h3 className="text-center mt-3 fs-5 p-2">Programas de Licenciaturas</h3>
                                <p className="text-center text-secondary p-1">Por muitos anos a nossa univesrsidade vem focando em estudos divididos em áreas pra mais controlo de estudantes, então se o seu foco e licenciar-se em qualquer área ou ramo entao estre programa será essencial pra si porque ele será o seu guia até chegares ao fim da estrada da licenciatura e não só também será o teu guia na tua vida profissional</p>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div style={{ backgroundColor: " #fff3f3" }} className="card">
                                <h3 className="text-center fs-5 mt-3 p-2"> Programas de Graduação</h3>
                                <p className="text-center text-secondary p-1">Para este programa a nossa univesrisade apresenta vários planos de desenvolvimento dos seus estudos em busca da graduação, como bolsas de estudos pra vários países ao redor do mundo com uma diversividade de campus em várias universidades muito famosas mundialmente dentre as quais a que tem a maior credibilidade é a de harfold, washingthon D.C </p>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div style={{ backgroundColor: " #fff3f3" }} className="card">
                                <h3 className="text-center fs-5 mt-3 p-2">Pós Graduação</h3>
                                <p className="text-center text-secondary p-1">Dentre todos o sistema de pós graduação é o mais delicado porque nele se aplicam várias normas e regras que em momento alguns nunca devem ser quebradas, mas o foco desse sistema e de melhor a mentalidade dos nossos estudantes que tiveram vários conhencimentos adquiridos ajudando a melhorar a forma de representar ou expressar estes conhencimentos</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="mt-5 pt-5">
                <h3 className="text-center fs-1 fw-bold">Lazer e Desporto</h3>
                <p style={{ marginLeft: "11rem" }} className="text-center text-secondary w-75 mb-5">Também temos outras áreas como lazer e desporto onde os estudantes desfrutam do momento depois ou antes das aulas</p>
                <div className="container mt-5 pt-5">
                    <div className="row">
                        <div className="col-md-4">
                            <img src="/library.png" className="img-fluid rounded " alt="" />
                            <h3 className="text-start fw-bold fs-5 mt-3">Biblioteca</h3>
                            <p style={{ fontSize: "14px" }} className="text-secondary mt-2 ">Temos uma biblioteca com mais de 10.000 livros disponiveis pra o uso inlimitados dos alunos de modo a melhorar o metodo de pesquisa cientifica podendo melhorar as hablilidades de pesquisa do estudante e também a estimular a mente de modo a ter o hábito de ler alguma coisa diariamente</p>
                        </div>
                        <div className="col-md-4">
                            <img src="/basketball.png" className="img-fluid rounded" alt="" />
                            <h3 className="text-start fw-bold fs-5 mt-3">Basquetebol</h3>
                            <p style={{ fontSize: "14px" }} className="text-secondary mt-2 ">Temos uma quadra desportva em que na qual não é praticada apenas do basquetebol também temos a prática de outras modalidades como natação, andebol, voleibol, e futebol futsal , inclusive a nossa universidade já foi campeã regional 14 vezes consectuivas mantendo um siclo de invenciblidade de 14 Anos</p>
                        </div>
                        <div className="col-md-4">
                            <img src="/cafeteria.png" className="img-fluid rounded" alt="" />
                            <h3 className="text-start fw-bold fs-5 mt-3">Cafeteria e Refeitório</h3>
                            <p style={{ fontSize: "14px" }} className="text-secondary mt-2 ">Temos um espaço onde os nossos estudantes desfrutam das nossas refeições diárias para oter as vitaminas e proteinas necessárias pra obter a enrgia suficiente pra o resto dia, como também temos a nossa cafeteria onde os alunos se quiserem podem pegar copos de café</p>
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