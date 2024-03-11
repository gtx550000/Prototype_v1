import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import Stack from "@mui/material/Stack";

import "../library/library.css";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import VideogameAssetIcon from "@mui/icons-material/VideogameAsset";
import EditNoteIcon from "@mui/icons-material/EditNote";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import HistoryIcon from "@mui/icons-material/History";

import "bootstrap/dist/css/bootstrap.min.css";

export default function library() {
  return (
    <div className="kanit-thin">
      <Box height={30}>
        <Box sx={{ display: "flex" }}>
          <Box component={"main"} sx={{ flexGrow: 1, p: 3 }}>
            <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={2}>
                <Grid xs={8}>
                  <Stack spacing={2} direction={"row"}>
                    <Card
                      sx={{ minWidth: 24 + "%", height: 140 }}
                      className="greadient1-library"
                    >
                      <CardContent>
                        <div>
                          <VideogameAssetIcon />
                        </div>
                        <Typography gutterBottom variant="h5" component="div">
                          500
                        </Typography>
                        <Typography
                          gutterBottom
                          variant="body2"
                          sx={{ color: "#ffff" }}
                        >
                          Total Game in the Library
                        </Typography>
                      </CardContent>

                      <CardActions></CardActions>
                    </Card>

                    <Card
                      sx={{ minWidth: 24 + "%", height: 140 }}
                      className="greadient2-library"
                    >
                      <CardContent>
                        <div>
                          <EditNoteIcon />
                        </div>
                        <Typography gutterBottom variant="h5" component="div">
                          10
                        </Typography>
                        <Typography
                          gutterBottom
                          variant="body2"
                          sx={{ color: "#ffff" }}
                        >
                          Wishlist in the Librar
                        </Typography>
                      </CardContent>
                      <CardActions></CardActions>
                    </Card>

                    <Card
                      sx={{ minWidth: 24 + "%", height: 140 }}
                      className="greadient3-library"
                    >
                      <CardContent>
                        <div>
                          <CloudDownloadIcon />
                        </div>
                        <Typography gutterBottom variant="h5" component="div">
                          3
                        </Typography>
                        <Typography
                          gutterBottom
                          variant="body2"
                          sx={{ color: "#ffff" }}
                        >
                          Download game in the Librar
                        </Typography>
                      </CardContent>
                      <CardActions></CardActions>
                    </Card>

                    <Card
                      sx={{ minWidth: 23.5 + "%", height: 140 }}
                      className="greadient4-library"
                    >
                      <CardContent>
                        <div>
                          <HistoryIcon />
                        </div>
                        <Typography gutterBottom variant="h5" component="div">
                          1
                        </Typography>
                        <Typography
                          gutterBottom
                          variant="body2"
                          sx={{ color: "#ffff" }}
                        >
                          History Dowload game
                        </Typography>
                      </CardContent>
                      <CardActions></CardActions>
                    </Card>
                  </Stack>
                </Grid>

                <Grid xs={4}>
                  <Stack spacing={2}>
                    <Card sx={{ maxWidth: 345 }}>
                      <CardContent>
                        <Stack spacing={2} direction={"row"}>
                          <div className="iconstyle-library">
                            <AccountBalanceWalletIcon />
                          </div>

                          <div className="paddingall-library">
                            <span className="pricetitle-library">
                              1,000 THB
                            </span>
                            <br />
                            <span className="pricesubtitle-library">Total</span>
                          </div>
                        </Stack>
                      </CardContent>
                    </Card>

                    <Card sx={{ maxWidth: 345 }}>
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          Lizard
                        </Typography>
                      </CardContent>
                    </Card>
                  </Stack>
                </Grid>

                <Grid xs={4}>
                  <Card
                    sx={{ height: 60 + "vh", width: 135.5 + "vh" }}
                    className="greadient5-library"
                  >
                    <CardContent>
                      <div class="">
                        <div class="">
                          <div class="">
                            <h5 class="">Latest transactions</h5>
                            <div class="card-body">
                              <div class="table-responsive">
                                <table class="table">
                                  <thead>
                                    <tr>
                                      <th scope="col">Order</th>
                                      <th scope="col">Product</th>
                                      <th scope="col">Customer</th>
                                      <th scope="col">Total</th>
                                      <th scope="col">Date</th>
                                      <th scope="col"></th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <th scope="row">17371705</th>
                                      <td>
                                        Volt Premium Bootstrap 5 Dashboard
                                      </td>
                                      <td>johndoe@gmail.com</td>
                                      <td>€61.11</td>
                                      <td>Aug 31 2020</td>
                                      <td>
                                        <a
                                          href="#"
                                          class="btn btn-sm btn-primary"
                                        >
                                          View
                                        </a>
                                      </td>
                                    </tr>
                                    <tr>
                                      <th scope="row">17370540</th>
                                      <td>
                                        Pixel Pro Premium Bootstrap UI Kit
                                      </td>
                                      <td>jacob.monroe@company.com</td>
                                      <td>$153.11</td>
                                      <td>Aug 28 2020</td>
                                      <td>
                                        <a
                                          href="#"
                                          class="btn btn-sm btn-primary"
                                        >
                                          View
                                        </a>
                                      </td>
                                    </tr>
                                    <tr>
                                      <th scope="row">17371705</th>
                                      <td>
                                        Volt Premium Bootstrap 5 Dashboard
                                      </td>
                                      <td>johndoe@gmail.com</td>
                                      <td>€61.11</td>
                                      <td>Aug 31 2020</td>
                                      <td>
                                        <a
                                          href="#"
                                          class="btn btn-sm btn-primary"
                                        >
                                          View
                                        </a>
                                      </td>
                                    </tr>
                                    <tr>
                                      <th scope="row">17370540</th>
                                      <td>
                                        Pixel Pro Premium Bootstrap UI Kit
                                      </td>
                                      <td>jacob.monroe@company.com</td>
                                      <td>$153.11</td>
                                      <td>Aug 28 2020</td>
                                      <td>
                                        <a
                                          href="#"
                                          class="btn btn-sm btn-primary"
                                        >
                                          View
                                        </a>
                                      </td>
                                    </tr>
                                    <tr>
                                      <th scope="row">17371705</th>
                                      <td>
                                        Volt Premium Bootstrap 5 Dashboard
                                      </td>
                                      <td>johndoe@gmail.com</td>
                                      <td>€61.11</td>
                                      <td>Aug 31 2020</td>
                                      <td>
                                        <a
                                          href="#"
                                          class="btn btn-sm btn-primary"
                                        >
                                          View
                                        </a>
                                      </td>
                                    </tr>
                                    <tr>
                                      <th scope="row">17370540</th>
                                      <td>
                                        Pixel Pro Premium Bootstrap UI Kit
                                      </td>
                                      <td>jacob.monroe@company.com</td>
                                      <td>$153.11</td>
                                      <td>Aug 28 2020</td>
                                      <td>
                                        <a
                                          href="#"
                                          class="btn btn-sm btn-primary"
                                        >
                                          View
                                        </a>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                              <a href="#" class="btn btn-library">
                                View all
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
}
