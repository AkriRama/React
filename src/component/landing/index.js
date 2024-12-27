import "./index.css"
const saleProducts = [
    {
        id: 1,
        name: "Item 1",
        image: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/22b1b91f-cef2-4861-a8d3-5ee250044361/dfts0ff-567efa30-60a4-4529-baa8-76e9afc14c69.png/v1/fill/w_1920,h_1080,q_80,strp/boboiboy_supra_orignal_sori_poster_new_edition_by_supraeditorart_dfts0ff-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTA4MCIsInBhdGgiOiJcL2ZcLzIyYjFiOTFmLWNlZjItNDg2MS1hOGQzLTVlZTI1MDA0NDM2MVwvZGZ0czBmZi01NjdlZmEzMC02MGE0LTQ1MjktYmFhOC03NmU5YWZjMTRjNjkucG5nIiwid2lkdGgiOiI8PTE5MjAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.chpaU1Nxd2rC5f2aZ7F3w0AUIW8O8XYxKdiizc1HvJU",
        originalPrice: 10000,
        discountPrice: 8000,
    },
    {
        id: 2,
        name: "Item 2",
        image: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/22b1b91f-cef2-4861-a8d3-5ee250044361/dfts0ff-567efa30-60a4-4529-baa8-76e9afc14c69.png/v1/fill/w_1920,h_1080,q_80,strp/boboiboy_supra_orignal_sori_poster_new_edition_by_supraeditorart_dfts0ff-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTA4MCIsInBhdGgiOiJcL2ZcLzIyYjFiOTFmLWNlZjItNDg2MS1hOGQzLTVlZTI1MDA0NDM2MVwvZGZ0czBmZi01NjdlZmEzMC02MGE0LTQ1MjktYmFhOC03NmU5YWZjMTRjNjkucG5nIiwid2lkdGgiOiI8PTE5MjAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.chpaU1Nxd2rC5f2aZ7F3w0AUIW8O8XYxKdiizc1HvJU",
        originalPrice: 30000,
        discountPrice: 15000,
    },
    {
        id: 3,
        name: "Item 3",
        image: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/22b1b91f-cef2-4861-a8d3-5ee250044361/dfts0ff-567efa30-60a4-4529-baa8-76e9afc14c69.png/v1/fill/w_1920,h_1080,q_80,strp/boboiboy_supra_orignal_sori_poster_new_edition_by_supraeditorart_dfts0ff-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTA4MCIsInBhdGgiOiJcL2ZcLzIyYjFiOTFmLWNlZjItNDg2MS1hOGQzLTVlZTI1MDA0NDM2MVwvZGZ0czBmZi01NjdlZmEzMC02MGE0LTQ1MjktYmFhOC03NmU5YWZjMTRjNjkucG5nIiwid2lkdGgiOiI8PTE5MjAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.chpaU1Nxd2rC5f2aZ7F3w0AUIW8O8XYxKdiizc1HvJU",
        originalPrice: 50000,
        discountPrice: 45000,
    },
    {
        id: 4,
        name: "Item 4",
        image: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/22b1b91f-cef2-4861-a8d3-5ee250044361/dfts0ff-567efa30-60a4-4529-baa8-76e9afc14c69.png/v1/fill/w_1920,h_1080,q_80,strp/boboiboy_supra_orignal_sori_poster_new_edition_by_supraeditorart_dfts0ff-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTA4MCIsInBhdGgiOiJcL2ZcLzIyYjFiOTFmLWNlZjItNDg2MS1hOGQzLTVlZTI1MDA0NDM2MVwvZGZ0czBmZi01NjdlZmEzMC02MGE0LTQ1MjktYmFhOC03NmU5YWZjMTRjNjkucG5nIiwid2lkdGgiOiI8PTE5MjAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.chpaU1Nxd2rC5f2aZ7F3w0AUIW8O8XYxKdiizc1HvJU",
        originalPrice: 100000,
        discountPrice: 80000,
    },
];

const products = [
    {
        id: 1,
        name: "Item 5",
        image: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/22b1b91f-cef2-4861-a8d3-5ee250044361/dfts0ff-567efa30-60a4-4529-baa8-76e9afc14c69.png/v1/fill/w_1920,h_1080,q_80,strp/boboiboy_supra_orignal_sori_poster_new_edition_by_supraeditorart_dfts0ff-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTA4MCIsInBhdGgiOiJcL2ZcLzIyYjFiOTFmLWNlZjItNDg2MS1hOGQzLTVlZTI1MDA0NDM2MVwvZGZ0czBmZi01NjdlZmEzMC02MGE0LTQ1MjktYmFhOC03NmU5YWZjMTRjNjkucG5nIiwid2lkdGgiOiI8PTE5MjAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.chpaU1Nxd2rC5f2aZ7F3w0AUIW8O8XYxKdiizc1HvJU",
        price: 50000,
    },
    {
        id: 2,
        name: "Item 6",
        image: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/22b1b91f-cef2-4861-a8d3-5ee250044361/dfts0ff-567efa30-60a4-4529-baa8-76e9afc14c69.png/v1/fill/w_1920,h_1080,q_80,strp/boboiboy_supra_orignal_sori_poster_new_edition_by_supraeditorart_dfts0ff-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTA4MCIsInBhdGgiOiJcL2ZcLzIyYjFiOTFmLWNlZjItNDg2MS1hOGQzLTVlZTI1MDA0NDM2MVwvZGZ0czBmZi01NjdlZmEzMC02MGE0LTQ1MjktYmFhOC03NmU5YWZjMTRjNjkucG5nIiwid2lkdGgiOiI8PTE5MjAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.chpaU1Nxd2rC5f2aZ7F3w0AUIW8O8XYxKdiizc1HvJU",
        price: 100000,
    },
    {
        id: 3,
        name: "Item 7",
        image: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/22b1b91f-cef2-4861-a8d3-5ee250044361/dfts0ff-567efa30-60a4-4529-baa8-76e9afc14c69.png/v1/fill/w_1920,h_1080,q_80,strp/boboiboy_supra_orignal_sori_poster_new_edition_by_supraeditorart_dfts0ff-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTA4MCIsInBhdGgiOiJcL2ZcLzIyYjFiOTFmLWNlZjItNDg2MS1hOGQzLTVlZTI1MDA0NDM2MVwvZGZ0czBmZi01NjdlZmEzMC02MGE0LTQ1MjktYmFhOC03NmU5YWZjMTRjNjkucG5nIiwid2lkdGgiOiI8PTE5MjAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.chpaU1Nxd2rC5f2aZ7F3w0AUIW8O8XYxKdiizc1HvJU",
        price: 50000,
    },
    {
        id: 4,
        name: "Item 8",
        image: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/22b1b91f-cef2-4861-a8d3-5ee250044361/dfts0ff-567efa30-60a4-4529-baa8-76e9afc14c69.png/v1/fill/w_1920,h_1080,q_80,strp/boboiboy_supra_orignal_sori_poster_new_edition_by_supraeditorart_dfts0ff-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTA4MCIsInBhdGgiOiJcL2ZcLzIyYjFiOTFmLWNlZjItNDg2MS1hOGQzLTVlZTI1MDA0NDM2MVwvZGZ0czBmZi01NjdlZmEzMC02MGE0LTQ1MjktYmFhOC03NmU5YWZjMTRjNjkucG5nIiwid2lkdGgiOiI8PTE5MjAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.chpaU1Nxd2rC5f2aZ7F3w0AUIW8O8XYxKdiizc1HvJU",
        price: 200000,
    },
    {
        id: 5,
        name: "Item 9",
        image: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/22b1b91f-cef2-4861-a8d3-5ee250044361/dfts0ff-567efa30-60a4-4529-baa8-76e9afc14c69.png/v1/fill/w_1920,h_1080,q_80,strp/boboiboy_supra_orignal_sori_poster_new_edition_by_supraeditorart_dfts0ff-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTA4MCIsInBhdGgiOiJcL2ZcLzIyYjFiOTFmLWNlZjItNDg2MS1hOGQzLTVlZTI1MDA0NDM2MVwvZGZ0czBmZi01NjdlZmEzMC02MGE0LTQ1MjktYmFhOC03NmU5YWZjMTRjNjkucG5nIiwid2lkdGgiOiI8PTE5MjAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.chpaU1Nxd2rC5f2aZ7F3w0AUIW8O8XYxKdiizc1HvJU",
        price: 70000,
    },
    {
        id: 6,
        name: "Item 10",
        image: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/22b1b91f-cef2-4861-a8d3-5ee250044361/dfts0ff-567efa30-60a4-4529-baa8-76e9afc14c69.png/v1/fill/w_1920,h_1080,q_80,strp/boboiboy_supra_orignal_sori_poster_new_edition_by_supraeditorart_dfts0ff-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTA4MCIsInBhdGgiOiJcL2ZcLzIyYjFiOTFmLWNlZjItNDg2MS1hOGQzLTVlZTI1MDA0NDM2MVwvZGZ0czBmZi01NjdlZmEzMC02MGE0LTQ1MjktYmFhOC03NmU5YWZjMTRjNjkucG5nIiwid2lkdGgiOiI8PTE5MjAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.chpaU1Nxd2rC5f2aZ7F3w0AUIW8O8XYxKdiizc1HvJU",
        price: 20000,
    },
    {
        id: 7,
        name: "Item 11",
        image: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/22b1b91f-cef2-4861-a8d3-5ee250044361/dfts0ff-567efa30-60a4-4529-baa8-76e9afc14c69.png/v1/fill/w_1920,h_1080,q_80,strp/boboiboy_supra_orignal_sori_poster_new_edition_by_supraeditorart_dfts0ff-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTA4MCIsInBhdGgiOiJcL2ZcLzIyYjFiOTFmLWNlZjItNDg2MS1hOGQzLTVlZTI1MDA0NDM2MVwvZGZ0czBmZi01NjdlZmEzMC02MGE0LTQ1MjktYmFhOC03NmU5YWZjMTRjNjkucG5nIiwid2lkdGgiOiI8PTE5MjAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.chpaU1Nxd2rC5f2aZ7F3w0AUIW8O8XYxKdiizc1HvJU",
        price: 80000,
    },
    {
        id: 8,
        name: "Item 12",
        image: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/22b1b91f-cef2-4861-a8d3-5ee250044361/dfts0ff-567efa30-60a4-4529-baa8-76e9afc14c69.png/v1/fill/w_1920,h_1080,q_80,strp/boboiboy_supra_orignal_sori_poster_new_edition_by_supraeditorart_dfts0ff-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTA4MCIsInBhdGgiOiJcL2ZcLzIyYjFiOTFmLWNlZjItNDg2MS1hOGQzLTVlZTI1MDA0NDM2MVwvZGZ0czBmZi01NjdlZmEzMC02MGE0LTQ1MjktYmFhOC03NmU5YWZjMTRjNjkucG5nIiwid2lkdGgiOiI8PTE5MjAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.chpaU1Nxd2rC5f2aZ7F3w0AUIW8O8XYxKdiizc1HvJU",
        price: 200000,
    },
];

const carousels = [
    {
        id: 1,
        image: "https://scontent.fcgk41-1.fna.fbcdn.net/v/t39.30808-6/466909057_1112575370223458_4322424490071240739_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_ohc=z1zdL5SiEcQQ7kNvgHYTJMh&_nc_zt=23&_nc_ht=scontent.fcgk41-1.fna&_nc_gid=AcY5e9w6qmhM6APjtSyFInh&oh=00_AYC4_szbI-OXJR-R2X83yIO6TiJ5Ed4QyQ66JYQ6rLy3_A&oe=677453F5",
        alt: "caro1"
    },
    {
        id: 2,
        image: "https://scontent.fcgk41-1.fna.fbcdn.net/v/t39.30808-6/444124177_996061311874865_2894457940991427753_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_ohc=x9F5BXm2COcQ7kNvgFLGD1I&_nc_zt=23&_nc_ht=scontent.fcgk41-1.fna&_nc_gid=All73Cfut2jXB8JKlW_M8ew&oh=00_AYBauxtykp_Qg2--WQqy-2tSpPVugswIutJ80fYDDWGqsg&oe=67743997",
        alt: "caro2"
    },
    {
        id: 3,
        image: "https://www.mugenmilano.com/wp-content/uploads/2024/04/BoBoiBoy-Windara-jpeg-e1713591835312.webp",
        alt: "caro3"
    },
]

let Landing = () => {
    return (
        <>
        <div>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">TRANSINC</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#">Products</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#">About Us</a>
                    </li>
                </ul>
                <form class="d-flex" role="search">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button class="btn btn-outline-success" type="submit">Search</button>
                </form>
                </div>
            </div>
            </nav>
        </div>

        <div className="container">
            {/* BANNER */}
            <div id="carouselExample" class="carousel slide mb-4">
                <div class="carousel-inner">
                    {carousels.map((carousel, index) => (
                        <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={carousel.id}>
                        <img src={carousel.image} className="carousel" alt={carousel.alt} />
                        </div>
                    ))}
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>

            {/* SALE PRODUCT */}
            <div class="container text-center mb-4">
                <div class="row"> 
                    <div class="col">
                        <h3>Sale Products</h3>
                        <div className="sale-product-2">
                            {saleProducts.map(product => {
                                const discountPercentage = Math.round(
                                    ((product.originalPrice - product.discountPrice) / product.originalPrice) * 100
                                );
                                return (
                                    <div class="card" style={{width: "18rem"}}>
                                    <div className="discount-badge">{discountPercentage}% OFF</div>
                                    <img src={product.image} class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">{product.name}</h5>
                                        <p class="original-price">Rp.{product.originalPrice}</p>
                                        <p class="discount-price">Rp.{product.discountPrice}</p>
                                        <a href="#" class="btn btn-primary">Buy</a>
                                    </div>
                                    </div>

                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
            {/* PRODUCT */}
            <div class="container text-center mb-4">
                <div class="row"> 
                    <div class="col">
                        <h3>Products</h3>
                        <div className="sale-product-2">
                            {products.map(product => (
                                    <div class="card" style={{width: "18rem"}}>
                                    <img src={product.image} class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">{product.name}</h5>
                                        <p class="card-text">Rp.{product.price}</p>
                                        <a href="#" class="btn btn-primary">Buy</a>
                                    </div>
                                    </div>

                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div>
            <div className="footer">
                <p class="text-center text-muted">© 2024 Transaction, Inc</p>
            </div>
        </div>
        
        </>
    )
}
export default Landing;