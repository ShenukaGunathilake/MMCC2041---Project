// ====== Date function START ======
window.onload = function () {
  document.getElementById("year").textContent = new Date().getFullYear();
};
// ====== Date function END ======

// ====== Navigation hover function START ======
$(document).ready(function () {
  $("nav ul li a").hover(
    function () {
      $(this).css("color", "#FFD700");
    },
    function () {
      $(this).css("color", "white");
    }
  );
});
// ====== Navigation hover function END ======

// ====== Navigation active function START ======
$(document).ready(function () {
  $("nav ul li a").click(function () {
    $("nav ul li a").removeClass("active");

    $(this).addClass("active");
  });
});
// ====== Navigation active function START ======

// ====== Mobile menu function START ======
$(document).ready(function () {
  function toggleMobileMenu() {
    // Toggle the navigation menu when the toggle button is clicked
    $("#toggle-menu")
      .off("click")
      .on("click", function (event) {
        event.stopPropagation();
        $("#nav-list").slideToggle();
      });

    // Close the menu when clicking outside of it
    $(document)
      .off("click")
      .on("click", function (event) {
        if (!$(event.target).closest("#toggle-menu, #nav-list").length) {
          $("#nav-list").slideUp(); // Hide the navigation menu
        }
      });
  }

  $(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
      $("header").addClass("scrolled");
    } else {
      $("header").removeClass("scrolled");
    }
  });

  if ($(window).width() <= 768) {
    toggleMobileMenu();
  }

  // Check on window resize
  $(window).resize(function () {
    if ($(window).width() <= 768) {
      toggleMobileMenu();
    } else {
      // If on desktop view, remove event listeners to prevent the functionality
      $("#nav-list").show();
      $("#toggle-menu").off("click");
      $(document).off("click");
    }
  });
});
// ====== Mobile menu function END ======

// ====== Tooltip function START ======
$(document).ready(function () {
  const tooltip = $("#tooltip");

  // Attach hover and mousemove events to elements with class 'tooltip-link'
  $(".tooltip-link")
    .hover(
      function (event) {
        const tooltipText = $(this).data("tooltip");
        tooltip.text(tooltipText).css({
          display: "inline-block",
          left: event.pageX + 10 + "px",
          top: event.pageY + 10 + "px",
        });
      },
      function () {
        tooltip.hide();
      }
    )
    .mousemove(function (event) {
      tooltip.css({
        left: event.pageX + 10 + "px",
        top: event.pageY + 10 + "px",
      });
    });
});
// ====== Tooltip function END ======

// ====== Fade-in function START ======
function fadeInOnLoad(selector, delay = 0) {
  window.addEventListener("load", function () {
    const element = document.querySelector(selector);
    if (element) {
      setTimeout(() => {
        element.classList.add("fade-in");
      }, delay);
    }
  });
}

fadeInOnLoad(".feature-container");
// ====== Fade-in function END ======

// ====== Blog section function START ======
$(document).ready(function () {
  let currentPage = 1;
  const itemsPerPage = 2;
  const totalItems = $(".blog-card").length;

  function showPage(page) {
    $(".blog-card").hide();
    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    $(".blog-card").slice(start, end).show();
  }

  $("#next").click(function () {
    if (currentPage < totalItems / itemsPerPage) {
      currentPage++;
      showPage(currentPage);
    }
  });

  $("#prev").click(function () {
    if (currentPage > 1) {
      currentPage--;
      showPage(currentPage);
    }
  });

  showPage(currentPage);
});
// ====== Blog section function END ======

// ====== Zoomed image function START ======
$(document).ready(function () {
  $(".example-image").on("click", function () {
    // Show the overlay and close button
    $(".overlay").fadeIn();
    $(".close-btn").fadeIn();

    // Add zoomed class to image
    $(this).addClass("zoomed");
  });

  // Close the zoomed image when overlay or close button is clicked
  $(".overlay, .close-btn").on("click", function () {
    $(".overlay").fadeOut();
    $(".close-btn").fadeOut();
    $(".example-image").removeClass("zoomed");
  });
});
// ====== Zoomed image function END ======

// ====== Accordion function START ======
$(document).ready(function () {
  $(".accordion-header").click(function () {
    if (!$(this).hasClass("active")) {
      // Collapse all other accordion items
      $(".accordion-header").removeClass("active");
      $(".accordion-body").slideUp();
      $(".accordion-arrow").text("►");

      // Expand the clicked item
      $(this).addClass("active");
      $(this).next(".accordion-body").slideDown();
      $(this).find(".accordion-arrow").text("▼");
    }
  });
});
// ====== Accordion function END ======
