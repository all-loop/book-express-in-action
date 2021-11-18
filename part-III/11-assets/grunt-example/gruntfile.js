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
  });

  // Carga el plugin de LESS para Grunt
  grunt.loadNpmTasks("grunt-contrib-less");

  // Define la tarea de compilación para LESS
  grunt.registerTask("default", ["less"]);
};
