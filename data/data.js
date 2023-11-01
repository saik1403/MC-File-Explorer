const data = {
  id: 1,
  name: "Files",
  type: "folder",
  folders: [
    {
      id: 2,
      name: "data",
      type: "folder",
      folders: [
        {
          id: 3,
          name: "data.json",
          type: "file"
        }
      ]
    },
    {
      id: 4,
      name: "public",
      type: "folder",
      folders: [
        {
          id: 5,
          name: "index.html",
          type: "file"
        }
      ]
    },
    {
      id: 6,
      name: "src",
      type: "folder",
      folders: [
        {
          id: 7,
          name: "App.js",
          type: "file"
        },
        {
          id: 8,
          name: "index.js",
          type: "file"
        },
        {
          id: 9,
          name: "styles.css",
          type: "file"
        }
      ]
    },
    {
      id: 10,
      name: "package.json",
      type: "file"
    }
  ]
};

export default data;
