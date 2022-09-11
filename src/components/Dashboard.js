import React from 'react';

const Dashboard = () => {
  return (
    <div className='dashboard'>
        <div class="card text-center border-success ">
            <div class="card-header border-success">
                Title
            </div>
            <div class="card-body card-height">
                <h5 class="card-title"></h5>
                <p class="card-text">
                    Loren ipsun dolor sit anet, consectetur adipisci elit, sed eiusnod tenpor incidunt
                </p>
            </div>
        </div>

        <div className='card-bottom'>
        <div class="row">
            <div class="col-sm-6">
                <div class="card border-danger">
                    <div class="card-body card-height">
                        <p class="card-text">
                        Loren ipsun dolor sit anet, consectetur adipisci elit, sed eiusnod tenpor incidunt
                        </p>
                    </div>
                </div>
            </div>
            <div class="col-sm-6">
                <div class="card border-warning">
                    <div class="card-body card-height">
                        <p class="card-text">
                        Loren ipsun dolor sit anet, consectetur adipisci elit, sed eiusnod tenpor incidunt
                        </p>
                    </div>
                </div>
            </div>
        </div>
        </div> 
    </div>
  )
}

export default Dashboard;