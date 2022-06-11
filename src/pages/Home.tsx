import Navbar from "../components/Navbar";
import {
  Button,
} from '@chakra-ui/react'

const Home = () => {
  return (
    <div>
      <header>
        <div className="container">
          <Navbar />
        </div>
      </header>
      <div className="main">
        <div className="left-side-text">
          <div className="text1">
            <h1>Belajar materi yang sesuai dengan kurikulum dan ketentuan perusahaan</h1>
          </div>
          <div className="text2">
            <h2>Berkesempatan menjadi bagian dari perusahaan</h2>
          </div>
          <Button width='37%' fontSize={16} textTransform={'uppercase'} marginTop={5} backgroundColor='#39A2DB' color='white' variant='solid'>
            MULAI SEKARANG
          </Button>
        </div>
        <div className="right-side">
          <img className="img-left-home" src="/assets/images/img.png" alt="images" />
        </div>
      </div>
      <div className="main2">
        <div className="left-side-text-2">
          <img className="img-left-home-2" src="/assets/images/img2.png" alt="images" />
        </div>
        <div className="right-side-2">
          <div className="text1-2">
            <h1><span>Kenapa</span> harus TeachIo?</h1>
          </div>
          <div className="text2-2">
            <h2>Materi langsung dari Perusahaan</h2>
            <p>Materi yang tersedia merupakan materi yang dibuat oleh perusahaan langsung yang tentuannya sudah sesuai dengan kriteria dan ketentuan perusahaan.</p>
          </div>
          <div className="text2-3">
            <h2>Pelajar siap kerja</h2>
            <p>Materi yang tersedia sudah dibuat berdasarkan apa yang dibutuhkan oleh industri teknologi saat ini, sehingga pelajar yang telah menguasai materi yang kami berikan akan siap untuk mulai karir di dunia IT.</p>
          </div>
          <div className="text2-3">
            <h2>Belajar Online 24/7</h2>
            <p>Anda dapat belajar melalui video dan materi yang dapat di akses 24 jam, dimana saja dan kapan saja.</p>
          </div>
          <div className="text2-3">
            <h2>Berkesempatan bergabung dengan Perusahaan</h2>
            <p>Jika berhasil menyelesaikan materi dan project yang dibuat perusahaan, maka anda berkesempatan untuk terpilih menjadi bagian dari perusahaan.</p>
          </div>
        </div>
      </div>
      <div className="text2-4">
        <h2>Berkesempatan bergabung dengan Perusahaan</h2>
        <p>Learn, Do, Growing</p>
      </div>
    </div>
  );
};

export default Home;
