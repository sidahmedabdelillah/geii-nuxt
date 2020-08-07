<template>
  <div class="container">
    <form enctype="multipart/form-data">
      <div class="form-group">
        <label for="exampleFormControlInput1">Titre</label>
        <input
          v-model="title"
          required
          class="form-control"
          id="exampleFormControlInput1"
          placeholder="Le tittre du document"
        />
      </div>
      <div class="form-group">
        <label for="exampleFormControlInput1">Module</label>
        <input
          v-model="Module"
          name="Module"
          required
          class="form-control"
          id="exampleFormControlInput1"
          placeholder="Le tittre du document"
        />
      </div>
      <div class="form-group">
        <label for="exampleFormControlSelect1">Specialite</label>
        <select
          v-model="specialite"
          class="form-control"
          id="exampleFormControlSelect1"
          name="specialite"
        >
          <option value="STR">Systeme Telecomunication et reseaux</option>
          <option value="AUTO">Automatique et Informatique indistruelle</option>
          <option value="SE">Systeme embarque</option>
        </select>
      </div>
      <div class="form-group">
        <label for="exampleFormControlSelect1">Type de document</label>
        <select
          class="form-control"
          id="exampleFormControlSelect1"
          name="type"
          v-model="type"
        >
          <option>cour</option>
          <option>td</option>
          <option>tp</option>
          <option>exam</option>
        </select>
      </div>

      <div class="dropbox">
        <input
          type="file"
          multiple
          name="document"
          :disabled="isSaving"
          @change="
            filesChange($event.target.name, $event.target.files);
            fileCount = $event.target.files.length;
          "
          class="input-file"
        />
        <p v-if="isInitial">
          Drag your file(s) here to begin<br />
          or click to browse
        </p>
        <p v-if="isSaving">Vous Avez Selectionner {{ fileCount }} files...</p>
      </div>

      <button @click.prevent="save" type="submit" class="btn btn-primary mb-2">
        Ajouter les document
      </button>
    </form>
  </div>
</template>

<script>
const STATUS_INITIAL = 0,
  STATUS_SAVING = 1,
  STATUS_SUCCESS = 2,
  STATUS_FAILED = 3;
export default {
  name: "app",
  data() {
    return {
      title: "",
      Module: "",
      specialite: "",
      type: "",
      uploadedFiles: [],
      uploadError: null,
      currentStatus: null,
      formData: null
    };
  },
  computed: {
    isInitial() {
      return this.currentStatus === STATUS_INITIAL;
    },
    isSaving() {
      return this.currentStatus === STATUS_SAVING;
    },
    isSuccess() {
      return this.currentStatus === STATUS_SUCCESS;
    },
    isFailed() {
      return this.currentStatus === STATUS_FAILED;
    }
  },
  methods: {
    reset() {
      // reset form to initial state
      this.currentStatus = STATUS_INITIAL;
      this.uploadedFiles = [];
      this.uploadError = null;
    },
    save() {
      // upload data to the server
      this.currentStatus = STATUS_SAVING;
      try {
        const data1 = {
          title: this.title,
          type: this.type,
          specialite: this.specialite,
          Module: this.Module
        };
        console.log(data1);
        this.formData.append("data", JSON.stringify(data1));
        const respond = this.$axios.post("/cours", this.formData);
      } catch (err) {
        console.log(err);
      }
    },
    filesChange(fieldName, fileList) {
      // handle file changes
      var formData1 = new FormData();

      if (!fileList.length) return;
      for (let i = 0; i < fileList.length; i++) {
        const file = fileList[i];
        formData1.append(`files.document`, file, file.name);
      }

      // save it
      this.formData = formData1;
    }
  },
  mounted() {
    this.reset();
  }
};
</script>

<style lang="scss">
.dropbox {
  outline: 2px dashed grey; /* the dash box */
  outline-offset: -10px;
  background: lightcyan;
  color: dimgray;
  padding: 10px 10px;
  min-height: 200px; /* minimum height */
  position: relative;
  cursor: pointer;
}

.input-file {
  opacity: 0; /* invisible but it's there! */
  width: 100%;
  height: 200px;
  position: absolute;
  cursor: pointer;
}

.dropbox:hover {
  background: lightblue; /* when mouse over to the drop zone, change color */
}

.dropbox p {
  font-size: 1.2em;
  text-align: center;
  padding: 50px 0;
}
</style>
