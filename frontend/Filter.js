import React from 'react';
import './Asserts/Filter.css';

const Filter = () => {
  return (
    <div className="container">
      {/* SIDE AREA */}
      <div className="sideArea">
        <div className="avatar">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCNOdyoIXDDBztO_GC8MFLmG_p6lZ2lTDh1ZnxSDawl1TZY_Zw"
            alt="Avatar"
          />
          <div className="avatarName">Welcome,<br />Admin</div>
        </div>
        <ul className="sideMenu">
          <li>
            <a href="javascript:void(0)" className="has-submenu">
              <span className="fa fa-table"></span>PRODUCT
            </a>
            <ul className="submenu">
              <li><a href="index.php?c=product&a=list01"><span className="fa fa-list"></span>Product List</a></li>
              <li><a href="index.php?c=product&a=list02"><span className="fa fa-tags"></span>Category List</a></li>
            </ul>
          </li>
          {/* <li><a href="menu_list.php"><span className="fa fa-sitemap"></span>MENU</a></li> */}
          <li><a href="invoice_list.php"><span className="fa fa-money"></span>INVOICE</a></li>
          <li><a href="user_list.php"><span className="fa fa-user-o"></span>USER</a></li>
          <li><a href="contact_list.php"><span className="fa fa-envelope-o"></span>CONTACT</a></li>
        </ul>
      </div>
      {/* SIDE AREA */}

      {/* MAIN AREA */}
      <div className="mainArea">
        {/* BEGIN NAV */}
        <nav className="navTop row">
          <div className="menuIcon fl"><span className="fa fa-bars"></span></div>
          <div className="account fr">
            <div className="name has-submenu">John Doe<span className="fa fa-angle-down"></span></div>
            <ul className="accountLinks submenu">
              <li><a href="">View website</a></li>
              <li><a href="">Log out<span className="fa fa-sign-out fr"></span></a></li>
            </ul>
          </div>
        </nav>
        {/* END NAV */}

        {/* CONTAINER */}
        <div className="mainContent">
          {/* LIST FORM */}
          <div className="row filterGroup">
            <form action="" method="POST" className="formSearch fl">
              <input type="text" className="inputSearch" placeholder="Search" />
              <button type="submit" className="btnSearch"><i className="fa fa-search"></i></button>
            </form>
            <div className="areaFilter fr row">
              <div className="boxSelect fr">
                <div className="titleSelect">Sort by</div>
                <ul className="optionSelect">
                  <li sortIndex="0"><a href="">Alphabet</a></li>
                  <li sortIndex="1"><a href="">Price, Ascending</a></li>
                  <li sortIndex="2"><a href="">Price, Descending</a></li>
                  <li sortIndex="3"><a href="">Latest</a></li>
                </ul>
              </div>
              {/* FILTER */}
              <div className="btnFilter fr bg-fff"><span className="fa fa-filter"></span>Filter</div>
              <div className="boxFilter">
                <div className="btnFilter"><span className="fa fa-close"></span>Close</div>
                {/* GROUP */}
                <div className="groupInput">
                  <select name="">
                    <option value="">Brand</option>
                    <option value="">Brand 01</option>
                    <option value="">Brand 02</option>
                  </select>
                  <select name="">
                    <option value="">Category</option>
                    <option value="">Category 01</option>
                    <option value="">Category 02</option>
                  </select>
                  <select name="">
                    <option value="">Author</option>
                    <option value="">Author 01</option>
                    <option value="">Author 02</option>
                  </select>
                </div>
                {/* END GROUP */}
                {/* GROUP */}
                <div className="groupInput">
                  <p className="titleInput">Price</p>
                  <div id="filterPrice"></div>
                  <div className="areaValue">
                    <p>From</p>
                    <input type="text" className="rangeValue" />
                    <p>To</p>
                    <input type="text" className="rangeValue" />
                  </div>
                </div>
                {/* END GROUP */}
              </div>
            </div>
          </div>

          <form action="" method="GET" name="listForm" className="form scrollX">
            <div className="formHeader row">
              <h2 className="text-1 fl">Product List</h2>
              <div className="fr">
                <button type="submit" className="btnSave bg-1 text-fff text-bold fr">SAVE</button>
                <a href="" className="btnAdd fa fa-plus bg-1 text-fff"></a>
              </div>
            </div>
            <div className="table">
              <div className="row bg-1">
                <div className="cell cell-50 text-center text-fff">ID</div>
                <div className="cell cell-100 text-center text-fff">CATEGORY</div>
                <div className="cell cell-100 text-fff">IMAGE</div>
                <div className="cell cell-100p text-fff">NAME</div>
                <div className="cell cell-100 text-center text-fff">
                  <input type="checkbox" className="checkbox checkAll" name="statusAll" target=".status" />
                </div>
                <div className="cell cell-100 text-center text-fff">EDIT</div>
              </div>
              {/* BEGIN LOOP */}
              <ul>
                <li className="row">
                  <div className="cell cell-50 text-center">1111</div>
                  <div className="cell cell-100 text-center">1</div>
                  <div className="cell cell-100 text-center">
                    <a href=""><img src="http://bookstore.crunchpress.com/wp-content/uploads/2013/05/b2.jpg" alt="" width="50" /></a>
                  </div>
                  <div className="cell cell-100p"><a href="">PRODUCT 01</a></div>
                  <div className="cell cell-100 text-center">
                    <input type="hidden" className="status" name="status" value="0" />
                    <input type="checkbox" className="btnSwitch status" name="status" />
                  </div>
                  <div className="cell cell-100 text-center">
                    <a href="" className="btnEdit fa fa-pencil bg-1 text-fff"></a>
                    <a href="" className="btnRemove fa fa-remove bg-1 text-fff" onClick={() => window.confirm('Do you really want to remove it?')}></a>
                  </div>
                </li>
                <li className="row">
                  <div className="cell cell-50 text-center">1111</div>
                  <div className="cell cell-100 text-center">1</div>
                  <div className="cell cell-100 text-center">
                    <a href=""><img src="http://bookstore.crunchpress.com/wp-content/uploads/2013/05/b2.jpg" alt="" width="50" /></a>
                  </div>
                  <div className="cell cell-100p"><a href="">PRODUCT 01</a></div>
                  <div className="cell cell-100 text-center">
                    <input type="hidden" className="status" name="status" value="0" />
                    <input type="checkbox" className="btnSwitch status" name="status" />
                  </div>
                  <div className="cell cell-100 text-center">
                    <a href="" className="btnEdit fa fa-pencil bg-1 text-fff"></a>
                    <a href="" className="btnRemove fa fa-remove bg-1 text-fff" onClick={() => window.confirm('Do you really want to remove it?')}></a>
                  </div>
                </li>
              </ul>
              {/* END LOOP */}
            </div>
          </form>

          {/* CATE LIST */}
          <form action="" method="GET" name="listForm" className="form scrollX">
            <div className="formHeader row">
              <h2 className="text-1 fl">Category List</h2>
              <div className="fr">
                <button type="submit" className="btnSave bg-1 text-fff text-bold fr">SAVE</button>
                <a href="" className="btnAdd fa fa-plus bg-1 text-fff"></a>
              </div>
            </div>
            <div className="table">
              <div className="row bg-1">
                <div className="cell cell-50 text-center text-fff">ID</div>
                <div className="cell cell-100 text-center text-fff">PARENT</div>
                <div className="cell cell-100p text-fff">NAME</div>
                <div className="cell cell-50 text-center text-fff">RANK</div>
                <div className="cell cell-50">
                  <input type="checkbox" className="checkbox caretAll" />
                </div>
                <div className="cell cell-100 text-center text-fff">EDIT</div>
              </div>
              {/* BEGIN LOOP */}
              <ul>
                <li className="row">
                  <div className="cell cell-50 text-center">1</div>
                  <div className="cell cell-100 text-center">0</div>
                  <div className="cell cell-100p"><a href="">CATE 1</a></div>
                  <div className="cell cell-50 text-center"><input type="number" name="rank[]" className="inputNumber" /></div>
                  <div className="cell cell-50 text-center"><span className="fa fa-caret-down btnCaret"></span></div>
                  <div className="cell cell-100 text-center">
                    <a href="" className="btnEdit fa fa-pencil bg-1 text-fff"></a>
                    <a href="" className="btnRemove fa fa-remove bg-1 text-fff" onClick={() => window.confirm('Do you really want to remove it?')}></a>
                  </div>
                  <ul className="sublist">
                    <li className="row">
                      <div className="cell cell-50 text-center">ID</div>
                      <div className="cell cell-100 text-center">PARENT</div>
                      <div className="cell cell-100p"><a href="">PRODUCT 2</a></div>
                      <div className="cell cell-50 text-center"><span className="fa fa-caret-down btnCaret"></span></div>
                      <div className="cell cell-100 text-center">
                        <a href="" className="btnEdit fa fa-pencil bg-1 text-fff"></a>
                        <a href="" className="btnRemove fa fa-remove bg-1 text-fff" onClick={() => window.confirm('Do you really want to remove it?')}></a>
                      </div>
                      <ul className="sublist">
                        <li>
                          <div className="cell cell-50 text-center">ID</div>
                          <div className="cell cell-100 text-center">PARENT</div>
                          <div className="cell cell-100p"><a href="">PRODUCT 2</a></div>
                          <div className="cell cell-50"></div>
                          <div className="cell cell-100 text-center">
                            <a href="" className="btnEdit fa fa-pencil bg-1 text-fff"></a>
                            <a href="" className="btnRemove fa fa-remove bg-1 text-fff" onClick={() => window.confirm('Do you really want to remove it?')}></a>
                          </div>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
              {/* END LOOP */}
            </div>
          </form>

          {/* DETAIL FORM */}
          <form action="" method="POST" enctype="multipart/form-data" className="form">
            <div className="formHeader row">
              <h2 className="text-1 fl">Product Detail</h2>
              <div className="fr">
                <button type="submit" className="btnSave bg-1 text-fff text-bold fr">SAVE</button>
                <a href="" className="btnAdd fa fa-plus bg-1 text-fff"></a>
              </div>
            </div>
            <div className="formBody row">
              <div className="column s-6">
                <label className="inputGroup">
                  <span>Name</span>
                  <span><input type="text" name="name" /></span>
                </label>
                <label className="inputGroup">
                  <span>Code</span>
                  <span><input type="text" name="code" /></span>
                </label>
                <label className="inputGroup">
                  <span>Price</span>
                  <span><input type="text" name="price" /></span>
                </label>
                <label className="inputGroup">
                  <span>Note</span>
                  <span><input type="text" name="note" /></span>
                </label>
              </div>
              <div className="column s-6">
                <label className="inputGroup">
                  <span>Category</span>
                  <span>
                    <select name="cate">
                      <option value="cate01">Category01</option>
                      <option value="cate02">Category02</option>
                    </select>
                    <i className="btnNewInput fa fa-plus bg-1 text-fff"></i>
                  </span>
                </label>
                <label className="inputGroup hide">
                  <span>Brand</span>
                  <span>
                    <input type="text" name="cate" />
                    <select name="brand">
                      <option value="cate01">Brand01</option>
                      <option value="cate02">Brand02</option>
                    </select>
                  </span>
                </label>
                <label className="inputGroup">
                  <span>Image</span>
                  <input type="hidden" name="img" value="src" />
                  <span>
                    <input type="file" name="img" onChange={(e) => console.log(e.target.files)} multiple />
                    <img src="http://bookstore.crunchpress.com/wp-content/uploads/2013/05/b2.jpg" alt="" width="50" />
                  </span>
                </label>
              </div>
              <div className="column">
                <label className="inputGroup">
                  <span>Description</span>
                  <textarea name="description"></textarea>
                </label>
              </div>
            </div>
          </form>

          <div id="pagination">
            <ul className="pagination list-inline text-center">
              <li><a href="?page=1">1</a></li>
              <li className="is-active"><a href="?page=2">2</a></li>
              <li><a href="?page=3">3</a></li>
              <li><a href="?page=4">4</a></li>
              <li><a href="?page=5">5</a></li>
            </ul>
          </div>
        </div>
        {/* END CONTAINER */}
      </div>
    </div>
  );
};

export default Filter;
