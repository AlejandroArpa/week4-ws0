import { Body, Controller, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { LoansService } from './loans.service';
import { CreateLoanDto } from './dto/create-loan.dto';

@Controller('loans')
export class LoansController {
    constructor(private readonly loansService: LoansService) { }

    
    @Get(':id')
    getLoanStatusById(@Param('id', ParseIntPipe) id : number): string {
        return this.loansService.calculateLoanRisk({ creditScore: 800 });
    }

    @Post()
    createLoan(@Body() createLoanDto: CreateLoanDto) {
        return `Loan created for ${createLoanDto.userId}`;
    }
}
