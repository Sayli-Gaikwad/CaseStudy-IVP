﻿using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Web.Mvc;

namespace SecMasterApi.Controllers
{
    public class HomeController : ApiController
    {
        public int GetEmployeeCount1()
        {
            using (SqlConnection connection = new SqlConnection(ConfigurationManager.ConnectionStrings["conn"].ConnectionString))
            {
                using (SqlCommand command = new SqlCommand("CountInActives", connection))
                {
                    command.CommandType = CommandType.StoredProcedure;
                    connection.Open();
                    int count = (int)command.ExecuteScalar();
                    return count;
                }
            }
        }
    }
}
