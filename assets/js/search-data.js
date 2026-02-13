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
          description: "",
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
        },{id: "nav-highlights",
          title: "highlights",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/highlights/";
          },
        },{id: "nav-dissemination",
          title: "dissemination",
          description: "Various dissemination activities in reversed chronological order",
          section: "Navigation",
          handler: () => {
            window.location.href = "/dissemination/";
          },
        },{id: "nav-awards",
          title: "awards",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/awards/";
          },
        },{id: "nav-webinars",
          title: "webinars",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/webinars/";
          },
        },{id: "nav-education",
          title: "education",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/education/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "projects-five-dimensional-imaging",
          title: 'Five-dimensional Imaging',
          description: "5D operando tomographic diffraction imaging using the continuous rotation-translation approach.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5d/";
            },},{id: "projects-battery-imaging-library-bil",
          title: 'Battery Imaging Library (BIL)',
          description: "An open, multi-modal, multi-length-scale dataset hub for battery imaging (X-ray CT, XRD-CT, SEM/EDX, EBSD and many more), designed for benchmarking and teaching.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/battery-imaging-library/";
            },},{id: "projects-beamstop",
          title: 'Beamstop',
          description: "Finden’s first commercial software for chemical imaging and tomography data.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/beamstop/";
            },},{id: "projects-dlsr",
          title: 'DLSR',
          description: "A solution to the parallax artefact in X-ray diffraction computed tomography data.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/dlsr/";
            },},{id: "projects-single-crystal-diffraction-artefacts",
          title: 'Single-crystal diffraction artefacts',
          description: "Removing multiple outliers and single-crystal artefacts from X-ray diffraction computed tomography data.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/filters/";
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
            },},{id: "projects-parallaxnet",
          title: 'ParallaxNet',
          description: "Eliminate parallax artefacts present in X-ray powder diffraction computed tomography data acquired from large samples.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/parallaxnet/";
            },},{id: "projects-pq-net",
          title: 'PQ-Net',
          description: "A deep convolutional neural network for real-time full profile analysis of big powder diffraction data.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/pqnet/";
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
