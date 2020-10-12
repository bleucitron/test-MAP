<script lang="ts">
  export let title: string;
  export let type: string;
  export let description: string;
  export let picture: string;
</script>

<style>
  .card {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 20rem;
    box-sizing: border-box;
    padding: 1rem;
    margin: 1rem;
    border: 2px solid #fc9f5b;
    border-radius: 4px;
  }

  button {
    padding: 0.5rem;
    color: white;
    background: #4295da;
    border-radius: 1rem;
    border: none;
  }

  h2 {
    color: #fc9f5b;
    font-size: 1.1rem;
    font-weight: normal;
  }

  h3 {
    color: lightgrey;
    font-size: 0.9rem;
  }

  .description {
    margin: 0.5rem 0;
  }

  a,
  button {
    cursor: pointer;
    display: block;
    text-decoration: none;
  }

  .more {
    color: #4295da;
    font-size: 0.8rem;
  }

  .img-container {
    width: 8rem;
  }

  img {
    width: 100%;
  }

  i {
    font-size: 0.9rem;
    margin-left: 0.2rem;
  }
</style>

<li class="card">
  <h3>{type}</h3>
  <div class="img-container"><img src={picture} alt="Logo Aide" /></div>
  <h2>{title}</h2>
  <div class="description">
    {@html description}
  </div>
  <div class="links">
    <a href="">
      <button>
        Vérifier l'éligibilité
        <i class="fas fa-chevron-right" />
      </button>
    </a>
    <a href="" class="more">En savoir plus</a>
  </div>
</li>
