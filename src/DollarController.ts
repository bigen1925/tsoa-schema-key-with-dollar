import { Controller, Get, Route } from "tsoa";

type $DollarType = string;

@Route("dollar")
export class DollarController extends Controller {
  @Get()
  getDollar(): $DollarType {
    return "$hello$world$";
  }
}
