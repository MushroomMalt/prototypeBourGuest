﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations;

namespace testLogin.Models
{
    public class Restaurant
    {
        public int restaurantID { get; set; }
        public string restaurantName { get; set; }
        public double latitude { get; set; }
        public double longitude { get; set; }
        public bool wheelchair { get; set; }
        public bool vegetarian { get; set; }
        public string type { get; set; }
        public string bio { get; set; }

        //[Display(Name = "Email address")]
        //[Required(ErrorMessage = "The email address is required")]
        //[EmailAddress(ErrorMessage = "Invalid Email Address")]
        public string Email { get; set; }

        public virtual ICollection<Floorplan> Floorplans { get; set; }
    }
}