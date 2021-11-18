module.exports = function (grunt) {
  // configura los ajustes para cada tarea de grunt
  grunt.initConfig({
    less: {
      main: {
        options: {
          paths: ["css"],
        },
        files: {
          "tmp/build/main.css": "css/main.less",
        },
      },
    },
    // Inicio de la configuración para browserify
    browserify: {
      client: {
        // Compila el archivo main.js de la carpeta 'my_javascript'
        // en la dirección 'tmp/build/main.js'
        src: ["my_javascript/main.js"],
        dest: "tmp/build/main.js",
      },
    },
  });

  // Carga el plugin de LESS para Grunt
  grunt.loadNpmTasks("grunt-contrib-less");
  // Carga la tarea para grunt-browserify
  grunt.loadNpmTasks("grunt-browserify");

  // Se define la compilación de browserify y less
  grunt.registerTask("default", ["browserify", "less"]);
};
