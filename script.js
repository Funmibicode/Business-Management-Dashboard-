        // ════════════════════════════════════════════
        //  NAVIGATION
        //  Hint: use data-page attribute on nav items
        //  to know which page to show
        // ════════════════════════════════════════════
 const navItems = document.querySelectorAll('.nav-item');
 const pages  = document.querySelectorAll('.page');

navItems.forEach(function(btn) {
    btn.addEventListener('click', function() {
            navItems.forEach((el) => {
                el.classList.remove('active');
            });
            
            
            btn.classList.remove('active');
            
        
            pages.forEach((page)=> {
                page.classList.remove('active');
            });
            
            const target = btn.dataset.page; 
            document.getElementById('page'+'-'+target).classList.add('active');
            
                // YOUR CODE HERE
                // 1. Remove "active" from all nav items
                // 2. Add "active" to clicked nav item
                // 3. Hide all pages
                // 4. Show the page matching btn.dataset.page
            });
        });


        // ════════════════════════════════════════════
        //  DATA
        //  Your records array and localStorage logic
        // ════════════════════════════════════════════

        let records = []; // load from localStorage here


        // ════════════════════════════════════════════
        //  DASHBOARD
        //  Hint: use filter() and reduce() to calculate
        //  totals for each type, then update the cards
        // ════════════════════════════════════════════

        function updateDashboard() {
            
            const records = [
                {
                    type:"sales",
                    amt: 200,
                },
                {
                    type:"expenses",
                    amt: 200,
                },
                {
                    type:"sales",
                    amt: 500,
                }
            ];
            
            // YOUR CODE HERE
            
            // 1. Calculate total sales
            const salesTotal = records
                .filter(r => r.type === "sales")
                .reduce((sum, sale) => {
                    
               return sum + Number(sale.amt)
            }, 0);
            
            let salTxt = document.getElementById('totalSales').textContent =`₦ ${salesTotal}` ;
           
        
        //console.log(salesTotal);
            
            // 2. Calculate total expenses
            const expTotal = records.filter((r) => r.type === "expenses").reduce((sum, exp) => {
                
               return sum + Number(exp.amt)
            }, 0);
            
            let expTxt = document.getElementById('totalExpenses').textContent =`₦ ${expTotal}`;
            
            // 3. Calculate total transport
            const transTotal = records.filter((r) => r.type === "transport").reduce((sum, trans) => {
                
               return sum + Number(trans.amt)
            }, 0);
            
            let transTxt = document.getElementById('totalTransport').textContent = `₦ ${transTotal}`;
            
            // 4. Calculate total utilities
            
            const utlTotal = records.filter((r) => r.type === "utilities").reduce((sum, uti) => {
                
                return sum + Number (uti.amt)
            }, 0);
            
            let utilityTxt = document.getElementById('totalUtilities').textContent =`₦ ${utlTotal}` ;
            
            // 5. Calculate net profit (sales - all costs)
            const netProf = salesTotal - (expTotal + transTotal + utlTotal);
            
            let netTxt = document.getElementById('netProfit').textContent = `₦ ${netProf}`;
            
            // 6. Update each card-amount element
            // 7. Update counts (how many records per type)
            // 8. Render last 5 records in recentRecordsBody
        }
updateDashboard();

        // ════════════════════════════════════════════
        //  FORM — ADD / EDIT RECORD
        //  Hint: check editingId.value to know if
        //  you're adding or editing
        // ════════════════════════════════════════════
        const recordForm = document.getElementById('recordForm');

        recordForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const type = document.getElementById('recordType').value.trim();
            const amt = document.getElementById('recordAmount').value;
            const desc = document.getElementById('recordDescription').value.trim();
            const date = document.getElementById('recordDate').value.trim();
            const cat = document.getElementById('recordCategory').value.trim();
            const note = document.getElementById('recordNote').value.trim();
            
            
            
            // Clear old errors first
    document.getElementById('typeError').textContent   = '';
    document.getElementById('amountError').textContent = '';
    document.getElementById('descError').textContent   = '';
    document.getElementById('dateError').textContent   = '';

    // Validate
    let isValid = true;

    if (type === "") {
        document.getElementById('typeError').textContent = "Please select a type";
        isValid = false;
    }

    if (desc === "") {
        document.getElementById('descError').textContent = "Description is required";
        isValid = false;
    }

    if (amt === "" || Number(amt) <= 0) {
        document.getElementById('amountError').textContent = "Enter a valid amount";
        isValid = false;
    }

    if (date === "") {
        document.getElementById('dateError').textContent = "Date is required";
        isValid = false;
    }

    if (!isValid) return; // stop if any field failed

    // Check if editing or adding
    const editingId = document.getElementById('editingId').value;

    if (editingId !== "") {
        // UPDATE existing record

    } else {
        // ADD new record
        const record = {
            id:          Date.now(),
            type:        type,
            amount:      Number(amt),
            description: desc,
            date:        date,
            category:    cat,
            note:        note
        };
        
        records.push(record);
        
        
    }
    localStorage.setItem('rec', JSON.stringify(records));
    
    const getItm = JSON.parse(localStorage.getItem('rec'));
    
    document.getElementById('allRecordsBody').textContent = getItm;
    
    //console.log(records);
   // console.log(getItm);
    
    recordForm.reset();
            // YOUR CODE HERE
            // 1. Read all field values
            // 2. Validate (type, description, amount, date required)
            // 3. If editingId has a value → update existing record
            //    Else → create new record with Date.now() as id
            // 4. Save to localStorage
            // 5. Update dashboard
            // 6. Reset form
            // 7. Show toast notification
        });

        document.getElementById('cancelBtn').addEventListener('click', function() {
            // YOUR CODE HERE
            // 1. Clear editingId
            // 2. Reset form
            // 3. Hide cancel button
            // 4. Change form title back to "Add Record"
        });


        // ════════════════════════════════════════════
        //  RENDER — ALL RECORDS TABLE
        //  Hint: use filter() for type filter,
        //  includes() for search, sort() for sorting
        // ════════════════════════════════════════════

        function renderAllRecords() {
            // YOUR CODE HERE
            // 1. Get search value from searchInput
            // 2. Get type filter from filterType
            // 3. Get sort option from filterSort
            // 4. Filter records by type
            // 5. Filter records by search query
            // 6. Sort records
            // 7. Render rows into allRecordsBody
            // 8. Show/hide allEmpty based on results
            // 9. Update recordsCount text
        }


        // ════════════════════════════════════════════
        //  DELETE RECORD
        //  Hint: filter out the record by id
        // ════════════════════════════════════════════

        function deleteRecord(id) {
            // YOUR CODE HERE
            // 1. Filter out the record with matching id
            // 2. Save to localStorage
            // 3. Re-render table
            // 4. Update dashboard
            // 5. Show toast
        }


        // ════════════════════════════════════════════
        //  EDIT RECORD
        //  Hint: find the record, pre-fill the form,
        //  navigate to add-record page
        // ════════════════════════════════════════════

        function editRecord(id) {
            // YOUR CODE HERE
            // 1. Find the record by id
            // 2. Pre-fill all form fields with record data
            // 3. Set editingId.value = id
            // 4. Change form title to "Edit Record"
            // 5. Show cancel button
            // 6. Navigate to add-record page
        }


        // ════════════════════════════════════════════
        //  TOAST NOTIFICATION
        //  Hint: add "show" class, then remove after 3s
        // ════════════════════════════════════════════

        function showToast(message, type = 'success') {
            // YOUR CODE HERE
            // 1. Set toastMsg text
            // 2. Set toastIcon (✅ for success, ❌ for error)
            // 3. Add/remove toast class based on type
            // 4. Add "show" class to display it
            // 5. After 3000ms remove "show" class
        }


        // ════════════════════════════════════════════
        //  SEARCH & FILTER LISTENERS
        // ════════════════════════════════════════════

        document.getElementById('searchInput').addEventListener('input', function() {
            // YOUR CODE HERE — re-render when user types
        });

        document.getElementById('filterType').addEventListener('change', function() {
            // YOUR CODE HERE — re-render when filter changes
        });

        document.getElementById('filterSort').addEventListener('change', function() {
            // YOUR CODE HERE — re-render when sort changes
        });


        // ════════════════════════════════════════════
        //  INIT — runs when page loads
        // ════════════════════════════════════════════

        function init() {
            // Set today's date in the header
            document.getElementById('todayDate').textContent =
                new Date().toLocaleDateString('en-US', {
                    weekday: 'long', year: 'numeric',
                    month: 'long',   day: 'numeric'
                });

            // Set today as default date in form
            document.getElementById('recordDate').valueAsDate = new Date();

            // YOUR CODE HERE
            // 1. Load records from localStorage
            // 2. Call updateDashboard()
            // 3. Call renderAllRecords()
        }

        init();
