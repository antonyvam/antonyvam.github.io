// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-projects",
          title: "projects",
          description: "Selected software, code and open-data projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "Publications by categories in reversed chronological order",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "projects-battery-imaging-library-bil",
          title: 'Battery Imaging Library (BIL)',
          description: "An open, multi-modal, multi-length-scale dataset hub for battery imaging (CT, XRD-CT, SEM/EDX, EBSD and more), designed for benchmarking and teaching.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/battery-imaging-library/";
            },},{id: "projects-high-res-dinov2",
          title: 'High-Res DINOv2',
          description: "Upsampling spatialised features from vision transformer (ViT) models like DINOv2 for unsupervised and weakly-supervised materials segmentation.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/hrdv2/";
            },},{id: "projects-ndtomo",
          title: 'nDTomo',
          description: "A modular Python toolkit for X-ray chemical imaging and tomography (with a focus on hyperspectral modalities such as XRD-CT).",
          section: "Projects",handler: () => {
              window.location.href = "/projects/ndtomo/";
            },},{id: "projects-samba",
          title: 'SAMBA',
          description: "SAMBA is a trainable segmentation tool for materials science that uses deep learning for fast, high-quality labels and random forests for robust, generalizable segmentations.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/samba/";
            },},{id: "projects-sd2i",
          title: 'SD2I',
          description: "The Single Digit to Image (SD2I) tensorflow-based image reconstruction tool.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/sd2i/";
            },},{id: "projects-vulture",
          title: 'Vulture',
          description: "Convolutional upsampling of DINOv2 features for weakly supervised segmentation.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/vulture/";
            },},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
