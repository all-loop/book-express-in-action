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
    uglify: {
      myApp: {
        files: {
          "tmp/build/main.min.js": ["tmp/build/main.js"],
        },
      },
    },
    watch: {
      scripts: {
        // Se le dice a grunt que observe las tareas para ejecutar
        // cualquier tarea asociada a browserify cada vez que haya
        // un cambio en un archivo js.
        files: ["**/*.js"],
        tasks: ["browserify"],
      },
      styles: {
        // Se le dice a grunt que obseve las tareas para ejecutar cualquier
        // tarea asociada a LESS cada vez que ocurra un cambio dentro de un
        // archivo .less
        files: ["**/*.less"],
        tasks: ["less"],
      },
    },
  });

  // Carga el plugin de LESS para Grunt
  grunt.loadNpmTasks("grunt-contrib-less");
  // Carga la tarea para grunt-browserify
  grunt.loadNpmTasks("grunt-browserify");
  grunt.loadNpmTasks("grunt-contrib-uglify");
  // Registra la nueva tarea de vigilancia para ser ejecutada cuando
  // se ejecute grunt watch
  grunt.loadNpmTasks("grunt-contrib-watch");

  // Se define la compilación de browserify y less
  grunt.registerTask("default", ["browserify", "less"]);
  grunt.registerTask("default", ["browserify", "less", "uglify"]);
};
