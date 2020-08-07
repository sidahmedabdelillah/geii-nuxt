<template>
  <div class="container">
    <div class="row" style="margin: 10px 0;">
      <div class="col-md-6" style="padding: 0;">
        <div class="search__container">
          <input
            class="search__input"
            type="text"
            placeholder="Search"
            v-model="query"
          />
        </div>
      </div>
      <div class="col-md-3">
        <div class="selector">
          <select required >
            <option value="1" selected>No Filter selected</option>
            <option value="2">Professeur</option>
            <option value="3">Maitre de conference A</option>
            <option value="4">Maitre de conference B</option>
            <option value="5">Maitre Assistant A</option>
            <option value="6">Maitre Assistant B</option>
          </select>
        </div>
      </div>
      <div class="col-md-3">
        <div class="selector">
          <select required 
            <option value="1" selected>No Filter selected</option>
            <option value="2">Professeur</option>
            <option value="3">Maitre de conference A</option>
            <option value="4">Maitre de conference B</option>
            <option value="5">Maitre Assistant A</option>
            <option value="6">Maitre Assistant B</option>
          </select>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-4">
        <div class="card" style="width: 18rem;">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" class="card-link">Card link</a>
            <a href="#" class="card-link">Another link</a>
          </div>
        </div>
        <div class="card" style="width: 18rem;">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" class="card-link">Card link</a>
            <a href="#" class="card-link">Another link</a>
          </div>
        </div>
        <div class="card" style="width: 18rem;">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" class="card-link">Card link</a>
            <a href="#" class="card-link">Another link</a>
          </div>
        </div>
        <div class="card" style="width: 18rem;">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" class="card-link">Card link</a>
            <a href="#" class="card-link">Another link</a>
          </div>
        </div>
        <div class="card" style="width: 18rem;">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" class="card-link">Card link</a>
            <a href="#" class="card-link">Another link</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
