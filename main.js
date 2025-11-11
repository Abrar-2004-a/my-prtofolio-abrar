 AOS.init();

 


 const toggleBtn = document.getElementById("toggleBtn");
    const content = document.getElementById("content");
    const arrow = document.getElementById("arrow");

    let isOpen = false;

    toggleBtn.addEventListener("click", () => {
      if (isOpen) {
        content.style.maxHeight = "0";        // إخفاء المحتوى
        arrow.style.transform = "rotate(0deg)"; // رجع السهم
      } else {
        content.style.maxHeight = content.scrollHeight + "px"; // عرض المحتوى
        arrow.style.transform = "rotate(90deg)"; // لف السهم
      }
      isOpen = !isOpen;
    });
  

const pages = {
  game: `
    <iframe data-aos="zoom-in-left" 
      src="./htmlfiles/game.html" 
      class="w-full md:h-screen md:pl-20 pl-2 duration-5000 delay-4000 bg-none h-[400px]  min-w-[410px]  mx-auto  "
     
    ></iframe>

  `,
  

  ///about

  about: `
  <div class="md:w-[60%] w-[95%] flex flex-col items-center  md:pl-8  pl-10 wrap-break-word  duration-4000 delay-2000"  data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">
  
  
  <h1 class="text-2xl text-[#ffb86c] font-bold mb-4">Abrar Ayman</h1>
           <h3 class ="mb-4 text-2xl font-semibold text-white">Front-End Developer |<span class=" text-[#ffb86c]"> Lifelong Learner </span></h3>

           <p class="text-lg  text-center font-semibold text-white ">Hey! I’m a front-end developer passionate about building beautiful, responsive, and user-friendly web experiences. I mainly work with HTML, CSS, JavaScript, and Tailwind, and I’m currently diving deeper  into React to take my projects to the next level.

I love combining clean design with solid  functionality — creating websites that not only look great but also feel smooth and intuitive to use. Recently, I’ve been exploring <span class="text-[#ffb86c]"> Node.js and Express </span> to understand  how the backend connects with the front.</p>



<h3 class="text-2xl text-[#ffb86c] font-bold mb-2 mt-4">
Current Work
</h3>

<p class="text-lg  text-center font-semibold text-white">I’m developing my personal projects and portfolio while continuously improving my skills in modern front-end tools and frameworks. Each project I build is a new step toward mastering the art of web development and expressing my creativity through code.</p>



<h3 class="text-2xl text-[#ffb86c] font-bold mb-2 mt-4">
Beyond Code
</h3>

<p class="text-lg  text-center font-semibold text-white">Outside of coding, I enjoy reading, learning new languages, and challenging myself to grow every day — whether in tech, creativity, or personal development</p>


</div>
  `,



  contact: `
  
  <div data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500"   class="md:w-[70%] w-[95%] flex flex-col  items-center justify-between md:pl-28 pl-20 pr-6  ml-12 wrap-break-word mt-20">

  <h1 class="text-2xl text-[#8be9fd] font-bold mb-2">Contact Me</h1>

  <p class="text-gray-400 text-lg ml-20  font-semibold max-w-[800px]  min-w-[400px]">
    Feel free to reach out to me through any of the social platforms below. I'm always open to new opportunities and connections.
  </p>

   <iframe data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000"
      src="./htmlfiles/code.html"
        class="w-full h-screen     items-center translate-x-[13%]    border-none min-w-[380px]  "
      "
     
    ></iframe>

</div>

  `,

  projects: `
  
 <div  data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500" class="container ml-12 px-4 sm:px-6 lg:px-8 py-10 flex flex-col items-center justify-between gap-x-20">
    <h1 class="lg:text-6xl md:text-4xl text-2xl text-[#50fa7b] font-bold mb-8">Projects.js</h1>

    <p class="text-white text-center text-xl md:max-w-[700px] px-4">
      Here's a collection of my recent work. These projects showcase my skills in web development using HTML, CSS, JavaScript, and Tailwind CSS.
    </p>

    <div   class="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-10 mt-10 px-4">
      
      <!-- Prayer Challenge -->
      <a   href="https://prayer-challenge-q9jg.vercel.app/"
        class="min-w-[290px] border-y-white border-y-4  flex flex-col bg-[#21222c] rounded-2xl border border-transparent hover:border-[#50fa7b] hover:scale-105 transition-transform duration-300 p-6 md:p-8 overflow-hidden">
        <p class="text-[#50fa7b] text-2xl md:text-3xl font-semibold mb-4">Daily Prayer App</p>
        <p class="min-w-[200px] text-white text-sm md:text-base leading-relaxed break-words">
          A simple Prayer Times Challenge built with <span class="text-[#50fa7b] font-semibold">HTML, Tailwind CSS, and Axios</span>. It uses the Aladhan API to display daily prayer times for Egyptian cities with automatic updates for both Gregorian and Hijri dates.
        </p>
      </a>

      <!-- Lasles VPN -->
      <a  href="https://lasles-vpn-88l4.vercel.app/"
        class="min-w-[290px]  border-y-white border-y-4  flex flex-col bg-[#21222c] rounded-2xl border border-transparent hover:border-[#50fa7b] hover:scale-105 transition-transform duration-300 p-6 md:p-8 overflow-hidden"  >
        <p class="text-[#50fa7b] text-2xl md:text-3xl font-semibold mb-4">
          Lasles<span class="text-white">VPN</span>
        </p>
        <p class=" min-w-[200px] text-white text-sm md:text-base leading-relaxed break-words">
          A modern landing page built with <span class="text-[#50fa7b] font-semibold">Tailwind CSS, AOS library, and Swiper.js</span>. It includes smooth animations, customer reviews, and responsive design created for practicing front-end effects.
        </p>
      </a>

      <!-- My Portfolio -->
      <a  href="https://lasles-vpn-88l4.vercel.app/"
        class="min-w-[290px] border-y-white border-y-4  flex flex-col bg-[#21222c] rounded-2xl border border-transparent hover:border-[#50fa7b] hover:scale-105 transition-transform duration-300 p-6 md:p-8 overflow-hidden">
        <p class="text-[#50fa7b] text-2xl md:text-3xl font-semibold mb-4">
          My<span class="text-white">Portfolio</span>
        </p>
        <p class="text-white text-sm md:text-base font-semibold mb-2">💻 About My Portfolio</p>
        <p class=" min-w-[200px] text-white text-sm md:text-base leading-relaxed wrap-break-word">
          My portfolio is inspired by Visual Studio Code. I wanted to create a clean, dark, and interactive design that feels like a real code editor. It's built with <span class="text-[#50fa7b] font-semibold">HTML, Tailwind CSS, and JavaScript</span>, and shows my passion for web development.
        </p>
      </a>



      <!-- Quizz App -->
      <a   href="https://quiz-app-biology.vercel.app/"
        class="min-w-[290px] border-y-white border-y-4  flex flex-col bg-[#21222c] rounded-2xl border border-transparent hover:border-[#50fa7b] hover:scale-105 transition-transform duration-300 p-6 md:p-8 overflow-hidden">
        <p class="text-[#50fa7b] text-2xl md:text-3xl font-semibold mb-4">Quizz App</p>
        <p class="min-w-[200px] text-white text-sm md:text-base leading-relaxed break-words">
         - 🌐 Bilingual interface (English & Arabic)
- ❓ Interactive quiz with 30 MCQs
- 📱 Responsive design
- 🎯 Progress tracking and results review
     <span class="text-[#50fa7b] font-semibold"> Technologies Used

- HTML5
- Tailwind CSS
- JavaScript (Vanilla)
- Font Awesome Icons </span>
        </p>
      </a>

    </div>
  </div>

 
`, 


  github: `
  
  <div data-aos="fade-up"
     data-aos-duration="3000"  class="container max-w-[1440px] mx-auto flex flex-col items-center justify-center text-center px-4 mt-10 space-y-4 sm:space-y-6 md:space-y-8 leading-tight">
  <p class="text-base sm:text-lg md:text-xl text-[#90A1B9]">Hi all. I am</p>

  <h1 class="text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-bold">
    Abrar-Ayman
  </h1>

  <h2 class="text-[#615FFF] font-bold text-2xl sm:text-4xl md:text-5xl lg:text-6xl">
    &gt; Front-end developer
  </h2>

  <p class="text-base sm:text-lg md:text-xl text-[#90A1B9]">// find my profile on Github:</p>

  <p class="text-base sm:text-lg md:text-xl break-words">
    <span class="text-[#615FFF]">const</span>
    <span class="text-[#00D5BE]"> githubLink</span> =
    <a href="https://github.com/Abrar-2004-a" target="_blank" class="text-[#FFA1AD] hover:underline">
      “https://github.com/Abrar-2004-a”
    </a>
  </p>
</div>

  
  
  
  `
};




// When clicking sidebar button
  document.querySelectorAll("button,li[data-page]").forEach(btn => {
  btn.addEventListener("click", () => {
    const pageName = btn.dataset.page;
    document.getElementById("mainContent").innerHTML = pages[pageName];
  });
});




