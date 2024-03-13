import * as React from "react";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import CardContent from "@mui/material/CardContent";

import "../Second/second.css";

/**13/3/24 */ import QRCode from "react-qr-code";

export default function IntroDivider() {
  return (
    <div
      style={{
        padding: "30px 0px 30px 50px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Card
        sx={{
          maxWidth: 300,
        }}
      >
        <CardContent>
          <QRCode value="tutorend.com"></QRCode>
          <Typography gutterBottom variant="h5" component="div">
            <div>QR Code Generator</div>
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <div>Paste scan Qr code Payment</div>
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
