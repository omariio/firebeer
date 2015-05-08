Meteor.startup(function () {
  // code to run on server at startup
});


// Future Peter can clean this up and move it to files.
// Global API configuration
Restivus.configure({
  useAuth: false,
  prettyJson: true
});

// Generates: GET, POST, DELETE on /api/docs and GET, PUT, DELETE on
// /api/docs/:id for Docs collection
Restivus.addCollection(Docs);


// // Maps to: /api/docs/:id
// Restivus.addRoute('docs/:id', {authRequired: false}, {
//   get: function () {
//     var doc = Docs.findOne(this.urlParams.id);
//     if (doc) {
//       return {status: 'success', data: doc};
//     }
//     return {
//       statusCode: 404,
//       body: {status: 'fail', message: 'Object not found'}
//     };
//   },
//   post: {
//     action: function () {
//       var doc = Docs.findOne(this.urlParams.id);
//       if (doc) {
//         return {status: "success", data: doc};
//       }
//       return {
//         statusCode: 400,
//         body: {status: "fail", message: "Unable to add post"}
//       };
//     }
//   },
//   delete: {
//     action: function () {
//       if (Docs.remove(this.urlParams.id)) {
//         return {status: "success", data: {message: "Item removed"}};
//       }
//       return {
//         statusCode: 404,
//         body: {status: "fail", message: "Item not found"}
//       };
//     }
//   }
// });