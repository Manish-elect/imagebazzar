import React from "react";
import "./pricing.css";

function Pricing(){
    return <div>
     <h1 className="main-heading">Subscribe & Save Upto 60%</h1>
<div className="table1-whole-display">
        <div className="table1">
         <div className="table1-header">
          <h1>Large Size Pack</h1>
          <p>5400 X 8100 pixels at 300 dpi (18” X 27” TIFF)</p>
          </div>
         <button>Subscribe</button>
         
<table>
<tr className="table1-row1">
    <td>Select</td>
    <td>  Images/Videos</td>
    <td>	Discount </td>	
    <td>  Price (Rs.)	</td>
    <td>Download Within</td>
</tr>
<tr className="table1-row-data">
    <td><input type="radio" name="list1"/></td>
    <td>4</td>
    <td>50%</td>
    <td>64,000</td>
    <td>90</td>
</tr>
<tr className="table1-row-data" >
    <td><input type="radio" name="list1" /></td>
    <td>8</td>
    <td>55%</td>
    <td>1,15,200</td>
    <td>180</td>
</tr>
<tr className="table1-row-data" >
    <td><input type="radio" name="list1" /></td>
    <td>20</td>
    <td>60%</td>
    <td>2,56,000</td>
    <td>365</td>
</tr>
</table>
<p className="table1-footer">The downloaded images/videos can be used for a period of 10 years</p>
</div>
</div>
<br></br>
<div className="table2">
 <div className="table2-header">
<h1>Web Size Pack</h1>
<p>800 X 1200 at 72 dpi (JPEG)</p>
</div>
<button>Subscribe</button>
<table>
    <tr className="table2-row1">
        <td>Select</td>
        <td>Images/Videos</td>
        <td>Discount</td>
        <td>Price (Rs.)	</td>
        <td>Download Within</td>   
    </tr>
    <tr className="table2-row-data">
        <td><input type="radio" name="list2" /></td>
        <td>4</td>
        <td>30%</td>
        <td>22,400</td>
        <td>90</td>   
    </tr>
    <tr className="table2-row-data">
        <td><input type="radio" name="list2" /></td>
        <td>8</td>
        <td>35%</td>
        <td>41,600</td>
        <td>180</td>   
    </tr>
    <tr className="table2-row-data">
        <td><input type="radio"  name="list2" /></td>
        <td>20</td>
        <td>40%</td>
        <td>96,000</td>
        <td>360</td>   
    </tr>
</table>
<p className="table2-footer"> The downloaded images/videos can be used for a period of 10 years </p>
</div>
<br></br>

<div className="table3">
<h1>Single Image Pricing</h1>
<table>
<tr className="table3-row1" >
    <td>Image Type</td>
    <td>Resolution</td>
    <td>Dimension (Pixels)</td>
    <td>Size (Inches)</td>
    <td>Price (Rs.)*</td>
    <td>File Format</td>
</tr>
<tr className="table3-row-data">
    <td>WEB</td>
    <td>72DPI</td>
    <td>800 x 1200</td>
    <td>For Web Use only</td>
    <td>8000</td>
    <td>JPEG</td>
</tr>
<tr className="table3-row-data" >
    <td>SMALL</td>
    <td>300DPI</td>
    <td>1500 X 2250</td>
    <td>5" X 7.5"</td>
    <td>16000</td>
    <td>JPEG</td>
</tr>
<tr className="table3-row-data" >
    <td>MEDIUM</td>
    <td>300DPI</td>
    <td>3600 X 5400</td>
    <td>12" X 18"</td>
    <td>22000</td>
    <td>TIFF</td>
</tr>
<tr className="table3-row-data" >
    <td>LARGE</td>
    <td>300DPI</td>
    <td>5400 X 8100</td>
    <td>18" X 27"</td>
    <td>32000</td>
    <td>TIFF</td>
</tr>
</table>
<br></br>
<p >*Tax @18% as applicable will be charged extra.</p>
<p >**The image type 'WEB' can only be used for online media and cannot be used in any kind of print media or otherwise.</p>
</div>
<br></br>
<div>
    <h3>Terms and Conditions:</h3>
    <li>Taxes extra (as applicable)</li>
    <li>Downloaded videos/images will not be returned/replaced</li>
    <li>Please read the End-User License Agreement for usage of the images/videos</li>
    <li>Available for Indian Territory Only.</li>
    <li>100% Money Back Guarantee: All the Subscription Packs mentioned above comes with a 100% Money Back Guarantee. The refund will only be processed if you have not downloaded even a single image/video during the Subscription period.</li>
    <li>The downloaded images/videos can be used for a period of 10 years.</li>
</div>
</div>
}

export default Pricing; 