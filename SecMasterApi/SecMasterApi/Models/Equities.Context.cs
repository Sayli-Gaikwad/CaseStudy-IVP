﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace SecMasterApi.Models
{
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Infrastructure;
    using System.Data.Entity.Core.Objects;
    using System.Linq;
    
    public partial class connectionn : DbContext
    {
        public connectionn()
            : base("name=connectionn")
        {
        }
    
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            throw new UnintentionalCodeFirstException();
        }
    
        public virtual DbSet<EquityDB> EquityDBs { get; set; }
    
        [DbFunction("connectionn", "TVF_EMPINFO")]
        public virtual IQueryable<TVF_EMPINFO_Result> TVF_EMPINFO(Nullable<int> iD)
        {
            var iDParameter = iD.HasValue ?
                new ObjectParameter("ID", iD) :
                new ObjectParameter("ID", typeof(int));
    
            return ((IObjectContextAdapter)this).ObjectContext.CreateQuery<TVF_EMPINFO_Result>("[connectionn].[TVF_EMPINFO](@ID)", iDParameter);
        }
    
        [DbFunction("connectionn", "TVF_EMPINFO1")]
        public virtual IQueryable<TVF_EMPINFO1_Result> TVF_EMPINFO1(Nullable<int> iD)
        {
            var iDParameter = iD.HasValue ?
                new ObjectParameter("ID", iD) :
                new ObjectParameter("ID", typeof(int));
    
            return ((IObjectContextAdapter)this).ObjectContext.CreateQuery<TVF_EMPINFO1_Result>("[connectionn].[TVF_EMPINFO1](@ID)", iDParameter);
        }
    
        public virtual ObjectResult<SP_GetTradeDetailsBySearchQuery_Result> SP_GetTradeDetailsBySearchQuery(string assetClass, ObjectParameter countOfEntries)
        {
            var assetClassParameter = assetClass != null ?
                new ObjectParameter("AssetClass", assetClass) :
                new ObjectParameter("AssetClass", typeof(string));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<SP_GetTradeDetailsBySearchQuery_Result>("SP_GetTradeDetailsBySearchQuery", assetClassParameter, countOfEntries);
        }
    
        public virtual ObjectResult<usp_GetAllEmployees_Result> usp_GetAllEmployees()
        {
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<usp_GetAllEmployees_Result>("usp_GetAllEmployees");
        }
    
        public virtual ObjectResult<usp_Login_Result> usp_Login(string name, string phoneNo)
        {
            var nameParameter = name != null ?
                new ObjectParameter("Name", name) :
                new ObjectParameter("Name", typeof(string));
    
            var phoneNoParameter = phoneNo != null ?
                new ObjectParameter("PhoneNo", phoneNo) :
                new ObjectParameter("PhoneNo", typeof(string));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<usp_Login_Result>("usp_Login", nameParameter, phoneNoParameter);
        }
    
        public virtual int usp_person(string name)
        {
            var nameParameter = name != null ?
                new ObjectParameter("Name", name) :
                new ObjectParameter("Name", typeof(string));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction("usp_person", nameParameter);
        }
    
        public virtual ObjectResult<USP_PROC1_Result> USP_PROC1()
        {
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<USP_PROC1_Result>("USP_PROC1");
        }
    
        public virtual ObjectResult<USP_PROC10_Result> USP_PROC10(Nullable<int> iD, string nAME, string tYPE, Nullable<int> bAL)
        {
            var iDParameter = iD.HasValue ?
                new ObjectParameter("ID", iD) :
                new ObjectParameter("ID", typeof(int));
    
            var nAMEParameter = nAME != null ?
                new ObjectParameter("NAME", nAME) :
                new ObjectParameter("NAME", typeof(string));
    
            var tYPEParameter = tYPE != null ?
                new ObjectParameter("TYPE", tYPE) :
                new ObjectParameter("TYPE", typeof(string));
    
            var bALParameter = bAL.HasValue ?
                new ObjectParameter("BAL", bAL) :
                new ObjectParameter("BAL", typeof(int));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<USP_PROC10_Result>("USP_PROC10", iDParameter, nAMEParameter, tYPEParameter, bALParameter);
        }
    
        public virtual ObjectResult<USP_PROC2_Result> USP_PROC2(Nullable<int> dID)
        {
            var dIDParameter = dID.HasValue ?
                new ObjectParameter("DID", dID) :
                new ObjectParameter("DID", typeof(int));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<USP_PROC2_Result>("USP_PROC2", dIDParameter);
        }
    
        public virtual ObjectResult<USP_PROC3_Result> USP_PROC3(string nAME, Nullable<double> sAL)
        {
            var nAMEParameter = nAME != null ?
                new ObjectParameter("NAME", nAME) :
                new ObjectParameter("NAME", typeof(string));
    
            var sALParameter = sAL.HasValue ?
                new ObjectParameter("SAL", sAL) :
                new ObjectParameter("SAL", typeof(double));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<USP_PROC3_Result>("USP_PROC3", nAMEParameter, sALParameter);
        }
    
        public virtual ObjectResult<USP_PROC4_Result> USP_PROC4(Nullable<int> jID)
        {
            var jIDParameter = jID.HasValue ?
                new ObjectParameter("JID", jID) :
                new ObjectParameter("JID", typeof(int));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<USP_PROC4_Result>("USP_PROC4", jIDParameter);
        }
    
        public virtual ObjectResult<USP_PROC5_Result> USP_PROC5(Nullable<int> sAL)
        {
            var sALParameter = sAL.HasValue ?
                new ObjectParameter("SAL", sAL) :
                new ObjectParameter("SAL", typeof(int));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<USP_PROC5_Result>("USP_PROC5", sALParameter);
        }
    
        public virtual int USP_PROC6(ObjectParameter aVG_SAL, ObjectParameter tOTSAL)
        {
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction("USP_PROC6", aVG_SAL, tOTSAL);
        }
    
        public virtual ObjectResult<USP_PROC7_Result> USP_PROC7()
        {
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<USP_PROC7_Result>("USP_PROC7");
        }
    
        public virtual ObjectResult<USP_PROC8_Result> USP_PROC8(string nAME, Nullable<int> yEAR)
        {
            var nAMEParameter = nAME != null ?
                new ObjectParameter("NAME", nAME) :
                new ObjectParameter("NAME", typeof(string));
    
            var yEARParameter = yEAR.HasValue ?
                new ObjectParameter("YEAR", yEAR) :
                new ObjectParameter("YEAR", typeof(int));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<USP_PROC8_Result>("USP_PROC8", nAMEParameter, yEARParameter);
        }
    
        public virtual int usp_Registration(string name, string phoneNo, string address, Nullable<int> isActive)
        {
            var nameParameter = name != null ?
                new ObjectParameter("Name", name) :
                new ObjectParameter("Name", typeof(string));
    
            var phoneNoParameter = phoneNo != null ?
                new ObjectParameter("PhoneNo", phoneNo) :
                new ObjectParameter("PhoneNo", typeof(string));
    
            var addressParameter = address != null ?
                new ObjectParameter("Address", address) :
                new ObjectParameter("Address", typeof(string));
    
            var isActiveParameter = isActive.HasValue ?
                new ObjectParameter("IsActive", isActive) :
                new ObjectParameter("IsActive", typeof(int));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction("usp_Registration", nameParameter, phoneNoParameter, addressParameter, isActiveParameter);
        }
    }
}
