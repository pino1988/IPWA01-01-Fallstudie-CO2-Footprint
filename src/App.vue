<script setup lang="ts">
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import LocalMenu from './components/LocalMenu.vue'
import CO2Table from './components/CO2Table.vue'
</script>

<template>
  <Header />
  <main class="container my-4" id="home">
    <div class="row">
      <!-- Sidebar -->
      <aside class="d-none d-md-block col-md-3">
        <LocalMenu />
      </aside>

      <!-- Content -->
      <section class="col-12 col-md-9">
        <h1 id="home" class="h3 mb-3">Einführung</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio ex incidunt eligendi consequuntur earum a
          voluptatibus architecto ea cumque cupiditate voluptatum beatae quasi harum rerum ducimus debitis quae aut
          dolorum, iusto, culpa sunt officia nemo? Nam, enim quisquam! Fugit provident repellendus odio nihil iusto
          similique ex ab facere dolorum reprehenderit vel tempore aperiam velit dolorem ipsam distinctio illo, corrupti
          asperiores ipsa quae laborum earum. Vel, pariatur molestias quia iusto accusantium sapiente aliquid tempora
          libero. Laboriosam maxime vel explicabo? Quam molestiae minus voluptates pariatur tempora aliquid perferendis?
          Ab voluptate blanditiis quas eos voluptatibus, nemo, maxime iusto quisquam quidem ad accusantium odit
          repellendus itaque eaque voluptates sunt facilis! Reprehenderit voluptas cumque voluptatem optio incidunt amet
          voluptatum facilis quos ab minus accusamus dignissimos molestiae nobis sed aut maxime corporis, ullam fugit,
          necessitatibus iure quod qui vel? Suscipit eveniet soluta repellat veniam nemo dolorum dignissimos modi minus
          pariatur qui nostrum maxime itaque voluptatibus accusamus repellendus, ullam error quas debitis? Maxime
          impedit corporis est ea sed necessitatibus, assumenda eaque accusamus? Consequuntur illum ab aperiam
          necessitatibus quibusdam pariatur, esse quos non hic accusamus, vel eum? Magni soluta aspernatur quasi.
          Tempore accusamus excepturi quod fuga. Aspernatur, tenetur est? Dolore, odio quisquam distinctio incidunt
          dicta dolorum aliquid quia.
        </p>

        <h2 id="data" class="h4 mt-4">CO<sub>2</sub>-Emissionsdaten</h2>
        <CO2Table />
      </section>

      <!-- Imprint -->
<section id="imprint" class="row pt-5 mt-5 border-top">
  <div class="col-12 col-md-9 offset-md-3">
      <h2 class="h3 mb-3">Imprint</h2>
      <address class="mb-4">
        <strong>Climate Transparency NPO</strong><br>
        Sample Street 12<br>12345 Sample City<br>Germany
      </address>
      <ul class="list-unstyled small">
        <li>Represented by: John Doe (Chairperson)</li>
        <li>Phone: +49 (0) 123 456 789</li>
        <li>E‑Mail: info@climate-transparency.org</li>
        <li>Registration: Register of Associations Sample City No. VR 1234</li>
        <li>VAT ID: DE123456789</li>
      </ul>
    </div>
  </section>



    </div>
  </main>
  <Footer />
</template>
