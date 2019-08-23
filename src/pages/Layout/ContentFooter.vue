<template>
  <footer class="footer">
    <div class="container">
      <nav>
        <ul>
          <li>
            <a href="https://alice.si">
              About Us
            </a>
          </li>
        </ul>
      </nav>
      <div class="copyright text-center">
        &copy; {{ new Date().getFullYear() }}
        <a href="https://alice.si" target="_blank"
          >Alice</a
        >, proudly funded by the <a href="https://gnosis.io/">Gnosis</a> GECO grant
      </div>
    </div>
  </footer>
</template>
<script>
export default {};
</script>
<style>
  .footer {
    padding: 5px;
  }
</style>
