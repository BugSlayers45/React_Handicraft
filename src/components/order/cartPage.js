<div clas="container">
              <div className="row font-weight-bold  pt-4 p-4 pl-4 text-center" >
                <div className="col-sm-1">S.no.</div>
                <div className="col-sm-3">Image</div>
                <div className="col-sm-3">Title</div>
                <div className="col-sm-2">Qty</div>
                <div className="col-sm-2">Price</div>
               
              </div>
              <div className="font-weight-bold">
               {cart.map((item, index)=>
                <div className="row font-weight-bold pt-4 p-4 pl-4  text-center">
                  <div className="col-sm-1">{index+1}</div>
                  <div className="col-sm-3">
                    <img
                      src={item.productId.thumbnail}
                      style={{ height: 100, width: 150 }}
                    />
                  </div>
                  <div className="col-sm-3">{item.productId.title}</div>
                  <div className="col-sm-2"></div>
                  <div className="col-sm-2" id="price<%=index%>">
                    {item.productId.price}
                  </div>
                  <div class="vr"></div>
                 
                </div>
               
               )}
              </div>
            </div>