
You will need to have a block similar to this in your theme's `package.json`:

    "plain": {
      "layout": {
        "template": "plain.html",
        "sections": {
          "body" : {"template": "body.html"}
        }
      }
    },

You will also need to have a file, `plain.html`, in your theme's `templates` directory.
It should have only this as the file contents:

    <%- body %>
